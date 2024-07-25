import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { allRecipes } from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";
import { useTagContext } from "./Tags/TagContext";

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
      <div>
        {selectedTags.map((tag) => (
          <span
            key={tag.id}
            style={{
              backgroundColor: "#d0d0d0",
              border: "1px solid #ccc",
              borderRadius: "3px",
              padding: "5px 10px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={() => removeTag(tag)}
          >
            {tag.name.fr}
          </span>
        ))}
      </div>
      <Recipes recipes={getFilteredRecipes()} />
    </div>
  );
}
