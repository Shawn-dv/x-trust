import { useState } from 'react';
import { Skeleton } from '@mui/material';

interface ImageLoaderInterface
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	height?: string | number;
	width?: string | number;
}

const ImageLoader = ({
	src,
	alt,
	className = '',
	height,
	width,
	...rest
}: ImageLoaderInterface) => {
	const [loading, setLoading] = useState(true);

	const handleImageLoaded = () => {
		setLoading(false);
	};

	return (
		<>
			{loading && (
				<Skeleton
					sx={{ bgcolor: 'grey.800' }}
					variant="rounded"
					animation={'pulse'}
					width={width ? width : '100px'}
					height={height ? height : '100px'}
					className={`${className}`}
					{...rest}
				/>
			)}

			<img
				src={src}
				alt={alt}
				onLoad={handleImageLoaded}
				className={`${!loading && className} image ${
					loading ? 'hidden' : ''
				}`}
				{...rest}
			/>
		</>
	);
};

export default ImageLoader;
