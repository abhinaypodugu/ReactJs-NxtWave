import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.5);
  z-index: 99;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSvg = styled.svg`
  animation: spin 1s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
