import React from "react";
import { Overlay, StyledSvg, LoaderWrapper } from "./Styles";
const LoadingIcon = (props) => (
  <StyledSvg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32 4C22 4 4 12 4 32C4 50 20 60 32 60C42.444 60 54 54 58 42"
      stroke="blue"
      strokeWidth={5}
/>
    
  </StyledSvg>
);
const FullScreenLoader = () => {
  return (
    <>
      <Overlay />
      <LoaderWrapper>
        <LoadingIcon />
      </LoaderWrapper>
    </>
  );
};

export default FullScreenLoader;
