import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "medium",
    borderRadius: "md",
    cursor: "button",
  },
  variants: {
    visual: {
      solid: {
        bg: "primary",
        color: "white",
        _hover: { bg: "primary-dark" },
      },
      outline: {
        borderColor: "primary",
        color: "primary",
        bg: "transparent",
        _hover: { bg: "primary-muted" },
      },
      ghost: {
        bg: "transparent",
        color: "primary",
        _hover: { bg: "primary-muted" },
      },
      subtle: {
        bg: "primary-muted",
        color: "primary",
      },
      surface: {
        bg: "surface",
        color: "primary",
        _hover: { bg: "surface-hover" },
      },
      plain: {
        bg: "transparent",
        color: "primary",
        _hover: { textDecoration: "underline" },
      },
    },
    size: {
      sm: { px: "4", py: "2", fontSize: "sm" },
      md: { px: "5", py: "2.5", fontSize: "md" },
      lg: { px: "6", py: "5", fontSize: "lg" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "md",
  },
});
