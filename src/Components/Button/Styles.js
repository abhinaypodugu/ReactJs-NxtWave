import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.variant === "success" ? "#2DCA73" : "#0B69FF"};
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  line-height: 24px;
  color: #ffffff;
`;
