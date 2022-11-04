import styled from "styled-components";
export const Box = styled.div`
  padding: 32px 148px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  @media only screen and (max-width: 900px) {
    padding: 16px 16px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1300px) {
    padding: 16px 90px;
  }
`;
export const SearchBar = styled.div`
  width: 648px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding-left: 16px;
  flex-grow: 1;
  color: rgba(126, 133, 142, 0.6);
`;

