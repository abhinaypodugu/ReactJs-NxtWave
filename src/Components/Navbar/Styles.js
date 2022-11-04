import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 16px 48px;
  border-bottom: 1px solid #d7dfe9;
  top: 0;
  left: 0;
  position: sticky;
  @media only screen and (max-width: 900px) {
    padding: 16px;
  }
`;
const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.img`
  margin-left: 32px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export { Nav, RightSideContainer, UserImage };
