import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@mui/material";
import "./style.css";

interface ImageLoaderInterface
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: string | number;
  width?: string | number;
  hover3D?: boolean;
}

const ImageLoader = ({
  src,
  alt,
  className = "",
  height,
  width,
  hover3D = false,
  ...rest
}: ImageLoaderInterface) => {
  const [loading, setLoading] = useState(true);
  const tiltRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const resetTimeoutId = useRef<NodeJS.Timeout>();
  const originalShadow = useRef<string>(""); // Store the original shadow

  const handleImageLoaded = () => {
    setLoading(false);
  };

  // Store the original shadow on component mount
  useEffect(() => {
    if (tiltRef.current) {
      originalShadow.current = tiltRef.current.style.boxShadow;
    }
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D || !tiltRef.current) return;

    // Cancel pending animations and timeouts
    cancelAnimationFrame(animationFrameId.current!);
    clearTimeout(resetTimeoutId.current!);

    // Enable transition for smooth animation
    tiltRef.current.style.transition =
      "transform 0.4s ease-out, box-shadow 0.4s ease-out";

    // Calculate transform
    animationFrameId.current = requestAnimationFrame(() => {
      const { clientWidth: width, clientHeight: height } = tiltRef.current!;
      const rect = tiltRef.current!.getBoundingClientRect();
      const xVal = e.clientX - rect.left;
      const yVal = e.clientY - rect.top;

      const yRotation = 12 * ((xVal - width / 2) / width);
      const xRotation = -12 * ((yVal - height / 2) / height);

      // Apply transform and shadow with transition
      tiltRef.current!.style.transform = `
        perspective(500px)
        scale(1.05)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;
      tiltRef.current!.style.boxShadow = `
        0 20px 30px rgba(0, 0, 0, 0.5),
        0 10px 10px rgba(0, 0, 0, 0.3)
      `;
    });
  };

  const handleOut = () => {
    if (!hover3D || !tiltRef.current) return;

    // Cancel any pending animations
    cancelAnimationFrame(animationFrameId.current!);

    // Enable transition for smooth reset
    tiltRef.current.style.transition =
      "transform 0.4s ease-out, box-shadow 0.4s ease-out";
    tiltRef.current.style.transform = `
      perspective(500px)
      scale(1)
      rotateX(0)
      rotateY(0)
    `;
    tiltRef.current.style.boxShadow = originalShadow.current; // Restore the original shadow

    // Reset transition after animation completes
    resetTimeoutId.current = setTimeout(() => {
      if (tiltRef.current) {
        tiltRef.current.style.transition = "none";
      }
    }, 400);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrameId.current!);
      clearTimeout(resetTimeoutId.current!);
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`${hover3D ? "tilt-effect" : ""} ${className}`}
      onMouseMove={hover3D ? handleMove : undefined}
      onMouseOut={hover3D ? handleOut : undefined}
      style={{ width, height }}
    >
      {loading && (
        <Skeleton
          sx={{ bgcolor: "grey.800" }}
          variant="rounded"
          animation="wave"
          width={width || "100px"}
          height={height || "100px"}
          className={className}
          {...rest}
        />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        className={`${!loading ? "visible" : "hidden"} ${className}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        {...rest}
      />
    </div>
  );
};

export default ImageLoader;
