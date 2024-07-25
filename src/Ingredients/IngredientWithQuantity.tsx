import { createUseStyles } from "react-jss";
import Ingredient from "./Ingredient";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";

const useStyles = createUseStyles({
  wrap: {
    display: "flex",
  },
});

export const IngredientWithQuantity = ({
  ingredientWithQuantity,
}: {
  ingredientWithQuantity: IngredientWithQuantityType;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      {ingredientWithQuantity.quantity}
      {ingredientWithQuantity.unit}
      &nbsp;
      {ingredientWithQuantity.ingredient.prefix}
      &nbsp;
      <Ingredient
        ingredient={ingredientWithQuantity.ingredient}
        quantity={ingredientWithQuantity.quantity}
      />
    </div>
  );
};
