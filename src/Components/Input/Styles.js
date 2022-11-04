import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #7e858e;
`;

export const StyledInput = styled.input`
  width: 320px;
  height: 40px;
  padding: 8px 16px;
  margin-bottom: 8px;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.link ? "#0B69FF;" : "#171f46")};
  background: ${(props) =>
    props.error ? "rgba(255, 11, 55, 0.05);" : "#ffffff"};
  border: ${(props) =>
    props.error ? "1px solid #FF0B37" : "1px solid #d7dfe9"};
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
`;
export const StyledTextarea = styled.textarea`
  width: 320px;
  height: 80px;
  padding: 12px 16px 20px 16px;
  resize: none;
  margin-bottom: 8px;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.link ? "#0B69FF;" : "#171f46")};
  background: ${(props) =>
    props.error ? "rgba(255, 11, 55, 0.05);" : "#ffffff"};
  border: ${(props) =>
    props.error ? "1px solid #FF0B37" : "1px solid #d7dfe9"};
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
`;
export const Message = styled.label`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`;
