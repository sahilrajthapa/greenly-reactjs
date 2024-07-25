import { IngredientWithQuantityType } from "../Ingredients/IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};

export interface StepProps {
  etape: StepType;
}

export interface StepsProps {
  steps: StepType[];
}
