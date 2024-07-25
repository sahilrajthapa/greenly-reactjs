import { TagType } from "./TagType";
import { useTagContext } from "./TagContext";

export const Tag = ({ tag }: { tag: TagType }) => {
  const { addTag } = useTagContext();

  const handleAddTag = () => addTag(tag);

  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`,
      }}
      onClick={handleAddTag}
    >
      {tag.name.fr}
    </div>
  );
};
