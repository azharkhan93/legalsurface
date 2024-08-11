"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Column } from "@/components/styled";
import styled from "styled-components";

type SkeletonProps = {
  height?: number;
  width?: string;
  wave?: boolean;
  color?: string;
};

const SkeletonLoader = dynamic(() => import("react-skeleton-loader"), {
  ssr: false,
}) as React.ComponentType<SkeletonProps>;

const StyledSkeletonLoader = styled(SkeletonLoader)<{ color?: string }>`
  .react-skeleton-loader__wave {
    background-color: ${({ color }) => color || "#e0e0e0"};
  }
`;

export const Loader: React.FC = () => {
  return (
    <Column mt={"l"} width={"95%"} gap={"m"} borderRadius="xl">
      <StyledSkeletonLoader height={270} width="100%" wave color="#2A3277" />
      <StyledSkeletonLoader height={50} width="80%" wave color="#2A3277" />
      <StyledSkeletonLoader height={30} width="70%" wave color="#2A3277" />
    </Column>
  );
};
