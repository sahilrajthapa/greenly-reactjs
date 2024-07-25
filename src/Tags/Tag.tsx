import { createUseStyles } from "react-jss";
import { TagType } from "./TagType";
import { useTagContext } from "./TagContext";

const useStyles = createUseStyles({
  tag: {
    margin: "10px",
    padding: "5px",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const Tag = ({ tag }: { tag: TagType }) => {
  const classes = useStyles();
  const { addTag } = useTagContext();

  const handleAddTag = () => addTag(tag);

  return (
    <div
      className={classes.tag}
      style={{ backgroundColor: `${tag.color}` }}
      onClick={handleAddTag}
    >
      {tag.name.fr}
    </div>
  );
};
