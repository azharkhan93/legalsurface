import { Box, Column } from "@/components";
import styled, { keyframes } from "styled-components";

export const shimmerAnimation = keyframes`
  0% {
    border-color: white;
  }
  50% {
    border-color: black;
  }
  100% {
    border-color: white;
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