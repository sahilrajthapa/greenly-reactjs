export type IngredientType = {
  name: string;
  names?: string;
  type?: string;
  unit?: string;
  prefix?: string;
};

export interface IngredientProps {
  ingredient: IngredientType;
  quantity?: number;
}

export interface IngredientsProps {
  ingredients?: IngredientType[];
}
