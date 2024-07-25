import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import {
  allRecipes,
  sugarRecipes,
  summerRecipes,
  dessertRecipes,
  noEggsRecipes,
  chocolateRecipes,
  autumnRecipes,
  veganRecipes,
  chocolateDessertRecipes,
  fruitBasedRecipes,
  glutenFreeRecipes,
} from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="App">
      Liste des recettes
      <TagList tags={tagList} />
      <button onClick={() => setFilter("chocolate")}>Chocolat</button>
      <button onClick={() => setFilter("sugar")}>Sucre</button>
      <button onClick={() => setFilter("summer")}>Eté</button>
      <button onClick={() => setFilter("dessert")}>Dessert</button>
      <button onClick={() => setFilter("chocolate dessert")}>
        Dessert Chocolat
      </button>
      <button onClick={() => setFilter("eggs free")}>Sans Oeufs</button>
      <button onClick={() => setFilter("autumn")}> Autumn</button>
      <button onClick={() => setFilter("vegan")}> Vegan</button>
      <button onClick={() => setFilter("fruitBased")}>Base De Fruits </button>
      <button onClick={() => setFilter("glutenFree")}>Sans Gluten</button>
      {filter === "all" && <Recipes recipes={allRecipes} />}
      {filter === "sugar" && <Recipes recipes={sugarRecipes} />}
      {filter === "summer" && <Recipes recipes={summerRecipes} />}
      {filter === "dessert" && <Recipes recipes={dessertRecipes} />}
      {filter === "chocolate dessert" && (
        <Recipes recipes={chocolateDessertRecipes} />
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes} />}
      {filter === "chocolate" && <Recipes recipes={chocolateRecipes} />}
      {filter === "autumn" && <Recipes recipes={autumnRecipes} />}
      {filter === "vegan" && <Recipes recipes={veganRecipes} />}
      {filter === "fruitBased" && <Recipes recipes={fruitBasedRecipes} />}
      {filter === "glutenFree" && <Recipes recipes={glutenFreeRecipes} />}
    </div>
  );
}
