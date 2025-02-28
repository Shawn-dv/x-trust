import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  loading,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled} // Disable button when loading
      className={`${props.className}`} // Tailwind class for fixed width
    >
      {loading ? (
        <CircularProgress size={24} className="text-inherit" /> // Tailwind class for spinner color
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;
