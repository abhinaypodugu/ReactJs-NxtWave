import styled from "styled-components";

const CardBox = styled.div`
  width: 360px;
  height: 192px;
  background: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0px 24px;
  box-sizing: border-box;
  @media only screen and (max-width: 360px) {
    width: 100%;
    padding: 12px 10px 0px 10px;
  }
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const CardTitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
const CardImageWrapper = styled.div`
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  margin-right: 16px;
`;
const CardStyledImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 0px;
`;
const CardHeaderTitle = styled.h3`
  margin: 0px;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
`;
const CardLink = styled.a`
  width: 100%;
  height: 24px;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
  margin-bottom: 8px;
`;
const CardDescription = styled.p`
  margin: 0px;
  width: 312px;
  height: 72px;
  text-overflow: ellipsis;
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const CardTitleDescription = styled.article`
  font-family: "HK Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
`;
export {
  CardBox,
  CardHeader,
  CardHeaderTitle,
  CardTitleWrapper,
  CardImageWrapper,
  CardLink,
  CardDescription,
  CardStyledImg,
  CardTitleDescription,
};
