import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 46px;
  @media only screen and (max-width: 600px) {
    padding: 0px 16px;
    box-sizing: border-box;
  }
`;

export const TabItem = styled.div`
  width: 200px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  color: ${(props) => (props.selected ? "#ffffff" : "#000000")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? "#0B69FF" : "#f3f4f7")};
  border: 1px solid #d7dfe9;
  border-right: ${(props) => (props.center ? "none" : "1px solid inherit")};
  border-left: ${(props) => (props.center ? "none" : "1px solid inherit")};
  border-bottom-left-radius: ${(props) => (props.first ? "4px" : "none")};
  border-top-left-radius: ${(props) => (props.first ? "4px" : "none")};
  border-bottom-right-radius: ${(props) => (props.last ? "4px" : "none")};
  border-top-right-radius: ${(props) => (props.last ? "4px" : "none")};
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;
