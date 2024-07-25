import { IngredientType } from "./IngredientType";

export type IngredientWithQuantityType = {
  ingredient: IngredientType;
  unit?: string;
  quantity: number;
};

export interface IngredientWithQuantityProps {
  ingredientWithQuantity: IngredientWithQuantityType;
}

export interface IngredientsWithQuantityProps {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}
