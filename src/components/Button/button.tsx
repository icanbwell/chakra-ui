import { chakra, useRecipe, type RecipeVariantProps } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export interface ButtonProps
  extends React.PropsWithChildren<ButtonVariantProps> {}

export const Button = (props: ButtonProps) => {
  const { visual, size, ...restProps } = props;

  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ visual, size });

  return <chakra.button css={styles} {...restProps} />;
};
