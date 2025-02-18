import { Button, ButtonProps } from "@mui/material";
import { JSX } from "react";

interface ButtonType {
  endIcon: JSX.Element;
  color: ButtonProps["color"];
  label: string;
}

const StyledButton = ({ endIcon, color, label }: ButtonType): JSX.Element => {
  return (
    <Button endIcon={endIcon} variant="contained" color={color} sx={{ p: 2 }}>
      {label}
    </Button>
  );
};

export default StyledButton;
