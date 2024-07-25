import { IngredientsWithQuantityProps } from "./IngredientWithQuantityType";
import { IngredientWithQuantity } from "./IngredientWithQuantity";

export const IngredientsWithQuantity = ({
  ingredientsWithQuantity,
}: IngredientsWithQuantityProps) => {
  return (
    <>
      {ingredientsWithQuantity.map((obj, ind) => (
        <IngredientWithQuantity key={ind} ingredientWithQuantity={obj} />
      ))}
    </>
  );
};

export default IngredientsWithQuantity;
