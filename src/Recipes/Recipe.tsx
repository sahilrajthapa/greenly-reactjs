import { useState } from "react";
import { createUseStyles } from "react-jss";
import { RecipeProps } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { Tags } from "../Tags/Tags";

const useStyles = createUseStyles({
  recipeWrap: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    boxShadow: "5px 5px 7px 2px rgba(0,0,0,0.76)",
    marginTop: "20px",
  },
  recipeImg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "200px",
    width: "70%",
    backgroundSize: "cover",
  },
  recipeContent: {
    padding: "10px",
    backgroundColor: "lightblue",
    width: "100%",
  },
  recipeDesc: {
    padding: "10px",
  },
  recipeTags: {
    display: "flex",
    justifyContent: "center",
  },
  recipeIngd: {
    backgroundColor: "blanchedalmond",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  recipeStepWrap: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  recipeStep: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
});

export const Recipe = ({ recipe }: RecipeProps) => {
  const classes = useStyles();
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <div className={classes.recipeWrap}>
      <div
        className={classes.recipeImg}
        style={{ backgroundImage: `url(${recipe.imageURL})` }}
      ></div>
      <div className={classes.recipeContent}>
        <h2>Nom de la recette: {recipe.nom}</h2>
        <div className={classes.recipeDesc}>{recipe.description}</div>
        <div className={classes.recipeTags}>
          <Tags tags={recipe.tags} />
        </div>
        <div className={classes.recipeIngd}>
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        <div className={classes.recipeStepWrap}>
          <div className={classes.recipeStep}>
            Etapes de la recette:
            <button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </button>
          </div>
          {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
