import { createUseStyles } from "react-jss";
import { useTagContext } from "./TagContext";
import { TagsProps } from "./TagType";

const useStyles = createUseStyles({
  tag: {
    backgroundColor: "#d0d0d0",
    border: "1px solid #ccc",
    borderRadius: "3px",
    padding: "5px 10px",
    marginRight: "5px",
    cursor: "pointer",
  },
});

export const SelectedTags = ({ tags }: TagsProps) => {
  const { removeTag } = useTagContext();
  const classes = useStyles();
  return (
    <div>
      {tags.map((tag) => (
        <span
          key={tag.id}
          className={classes.tag}
          onClick={() => removeTag(tag)}
        >
          {tag.name.fr}
        </span>
      ))}
    </div>
  );
};
