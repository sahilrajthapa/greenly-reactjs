import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { allRecipes } from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { useTagContext } from "./Tags/TagContext";
import { SelectedTags } from "./Tags/SelectedTags";

export default function App() {
  const { selectedTags, removeTag } = useTagContext();

  const getFilteredRecipes = () => {
    if (selectedTags.length === 0) return allRecipes;
    return allRecipes.filter((recipe) =>
      selectedTags.some((tag) => recipe.tags.find((t) => t.id === tag.id))
    );
  };

  return (
    <div className="App">
      Liste des recettes
      <TagList tags={tagList} />
      <SelectedTags tags={selectedTags} />
      <Recipes recipes={getFilteredRecipes()} />
    </div>
  );
}
