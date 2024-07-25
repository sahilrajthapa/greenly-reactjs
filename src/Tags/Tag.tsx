import { createUseStyles } from "react-jss";
import { TagProps } from "./TagType";
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

export const Tag = ({ tag }: TagProps) => {
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
