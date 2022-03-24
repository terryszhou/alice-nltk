import { Button } from "@chakra-ui/react";
import * as React from "react";

interface AliceButtonProps {
  as?: any | undefined,
  href?: string,
  target?: string,
  onClick?: () => void,
};

export const AliceButton = ({
  as,
  href,
  target,
  onClick
}: AliceButtonProps) => {
  return (
    <Button
      as={as}
      backgroundColor={"pink"}
      color={"brand.400"}
      cursor={"pointer"}
      fontFamily={"var(--chakra-fonts-inspiration)"}
      fontSize={24}
      href={href}
      maxWidth={100}
      onClick={onClick}
      position={"relative"}
      transition={"200ms ease-in-out"}
      target={target}
      _active={{ backgroundColor: "brand.400" }}
      _after={{
        position: "absolute",
        clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)",
        content: `""`,
        height: "100%",
        width: "20%",
        background: "pink",
        right: -4,
        transition: "200ms ease-in-out",
        zIndex: -1 }}
      _before={{
        background: "brand.100",
        borderRadius: "50%",
        content: `""`,
        height: 2,
        position: "absolute",
        right: -2,
        width: 2 }}
      _focus={{ boxShadow: "none" }}
      _hover={{
        backgroundColor: "brand.400",
        color: "pink",
        _after: { backgroundColor: "brand.400" } }}>
      Click Me
    </Button>
  );
};
