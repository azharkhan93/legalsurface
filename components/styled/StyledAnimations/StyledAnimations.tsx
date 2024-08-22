import { Box, Column } from "@/components";
import styled, { keyframes } from "styled-components";

export const topBorderWave = keyframes`
  0% {
    border-top-color: white;
  }
  50% {
    border-top-color: black;
  }
  100% {
    border-top-color: white;
  }
`;

// Define the shimmer wave animation keyframes for the bottom border
export const bottomBorderWave = keyframes`
  0% {
    border-bottom-color: black;
  }
  50% {
    border-bottom-color: white;
  }
  100% {
    border-bottom-color: black;
  }
`;

// export const shimmerWave = keyframes`
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;


// export const StyledAnimations = styled()`
//   border-top: 4px solid;
//   border-bottom: 4px solid;
//   border-image: initial;
//   animation: ${shimmerAnimation} 2s infinite ease-in-out;
//   border-radius: 8px;
// `;