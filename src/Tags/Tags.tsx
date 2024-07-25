import { createUseStyles } from "react-jss";
import { Tag } from "./Tag";
import { TagsProps } from "./TagType";

const useStyles = createUseStyles({
  tags: {
    margin: "10px",
    padding: "5px",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const Tags = ({ tags }: TagsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.tags}>
      {tags.map((obj) => (
        <Tag key={obj.id} tag={obj} />
      ))}
    </div>
  );
};
