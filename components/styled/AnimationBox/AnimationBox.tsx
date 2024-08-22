"use client";
import styled from "styled-components";
import { Box } from "../Box";
import { bottomBorderWave, topBorderWave } from "../StyledAnimations";

export const AnimationBox = styled(Box)`
  border-top: 4px solid white;
  border-bottom: 4px solid black;
  border-radius: 8px;

  animation: ${topBorderWave} 3s ease-in-out infinite,
    ${bottomBorderWave} 3s ease-in-out infinite;
`;

// border-top: 4px solid transparent;
// border-bottom: 4px solid transparent;
// border-radius: 8px;
// background: linear-gradient(
//   to right,
//   white 25%,
//   black 50%,
//   white 75%
// );
// background-size: 200% 100%;
// animation: ${shimmerWave} 3s ease-in-out infinite;
