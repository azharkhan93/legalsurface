"use client";
import styled from "styled-components";
import { Box } from "../Box";
import {   shimmerAnimation } from "../StyledAnimations";

export const AnimationBox = styled(Box)`
border-top: 4px solid;
border-bottom: 4px solid;
border-image: initial;
animation: ${shimmerAnimation} 2s infinite ease-in-out;
border-radius: 8px;
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
