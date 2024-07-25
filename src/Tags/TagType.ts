export type Translation = {
  fr: string;
  en: string;
};

export type TagType = {
  id: string;
  type: string;
  name: Translation;
  color: string;
};

export interface TagProps {
  tag: TagType;
}

export interface TagsProps {
  tags: TagType[];
}

export type TagContextType = {
  selectedTags: TagType[];
  addTag: (tag: TagType) => void;
  removeTag: (tag: TagType) => void;
};
