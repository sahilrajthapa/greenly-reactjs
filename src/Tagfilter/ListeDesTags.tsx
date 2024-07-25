import { Tags } from "../Tags/Tags";
import { TagsProps } from "../Tags/TagType";

export const TagList = ({ tags }: TagsProps) => {
  return <Tags tags={tags} />;
};
