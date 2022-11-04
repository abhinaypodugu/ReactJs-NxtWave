import React from "react";
import { FormGroup, Label, Message, StyledInput } from "./Styles";

const Input = ({
  label,
  marginTop,
  errorMessage,
  link = false,
  error,
  inputProps,
}) => {
  return (
    <FormGroup marginTop={marginTop}>
      <Label htmlFor={label}> {label}</Label>
      <StyledInput error={error} link={link} id={label} {...inputProps} />
      {errorMessage && <Message>{errorMessage}</Message>}
    </FormGroup>
  );
};

export default Input;
