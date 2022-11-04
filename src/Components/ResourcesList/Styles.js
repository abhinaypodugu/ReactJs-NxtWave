import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 32px;
  @media only screen and (max-width: 900px) {
    justify-content: center;
    column-gap: 15px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1300px) {
    gap: 10px;
  }
`;