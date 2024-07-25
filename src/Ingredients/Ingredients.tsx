import { IngredientsProps } from "./IngredientType";
import Ingredient from "./Ingredient";

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />)}
    </>
  );
};

export default Ingredients;
