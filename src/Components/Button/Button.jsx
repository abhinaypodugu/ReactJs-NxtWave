import React from "react";
import { StyledButton } from './Styles';

const Button = React.forwardRef(({ text, variant, ...rest }, ref) => {
  return <StyledButton ref={ref} {...rest} variant={variant}>{text}</StyledButton>;
});

export default Button;
