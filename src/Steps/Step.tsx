import { createUseStyles } from "react-jss";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { StepProps } from "./StepType";

const useStyles = createUseStyles({
  step: {
    backgroundColor: "thistle",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
    padding: "10px",
  },
  stepPad: {
    padding: "10px",
  },
});

export const Step = ({ etape }: StepProps) => {
  const classes = useStyles();
  return (
    <div className={classes.step}>
      <div>
        {etape.order}. {etape.description}
      </div>
      <div className={classes.stepPad}>
        {etape.ingredients && (
          <IngredientsWithQuantity
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;
