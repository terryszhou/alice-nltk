import { keyframes } from "@chakra-ui/react";

export const float: string = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-10px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const fadeRight: string = keyframes`
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const typeWriter: string = keyframes`
  0% {
    width: 0%;
    border-right: 0.25em transparent;
  } 10% {
    width: 0%;
    border-right: 0.25em solid;
  } 90% {
    width: 100%;
    border-right: 0.25em solid;
  } 100% {
    width: 100%;
    border-right: 0.25em transparent;
  }
`;

export const scroll: string = keyframes`
  from {
    height: 0%;
    opacity: 0;
  } to {
    height: 100%;
    opacity: 1;
  }
`;