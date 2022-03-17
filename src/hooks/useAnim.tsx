import { usePrefersReducedMotion } from "@chakra-ui/react";
import * as React from "react";

export const useAnim = (animation: string) => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  return prefersReducedMotion ? undefined : animation;
};