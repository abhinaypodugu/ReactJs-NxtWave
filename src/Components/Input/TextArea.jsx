import React from "react";
import { FormGroup, Label, Message, StyledTextarea } from "./Styles";

const TextArea = ({ label, error, marginTop, errorMessage, textAreaProps }) => {
  return (
    <FormGroup marginTop={marginTop}>
      <Label htmlFor={label}> {label}</Label>
      <StyledTextarea error={error} id={label} {...textAreaProps} />
      {errorMessage && <Message>{errorMessage}</Message>}
    </FormGroup>
  );
};

export default TextArea;
