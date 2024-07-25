import { createUseStyles } from "react-jss";
import { RecipesProps } from "./RecipeType";
import Recipe from "./Recipe";

const useStyles = createUseStyles({
  recipesWrap: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  recipes: {
    backgroundColor: "whitesmoke",
    borderWidth: "10px",
    borderColor: "black",
    maxWidth: "800px",
  },
});

export const Recipes = ({ recipes }: RecipesProps) => {
  const classes = useStyles();
  return (
    <div className={classes.recipesWrap}>
      <div className={classes.recipes}>
        {recipes.map((obj) => (
          <Recipe key={obj.nom} recipe={obj} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
