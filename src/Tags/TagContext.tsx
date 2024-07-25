import React, { createContext, useState, ReactNode, useContext } from "react";
import { TagContextType, TagType } from "./TagType";

const TagContext = createContext<TagContextType | null>(null);

export const useTagContext = () => {
  const context = useContext(TagContext);
  if (!context) throw new Error("Must be used in TagProvider");
  return context;
};

export const TagProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  const addTag = (tag: TagType) => {
    setSelectedTags((prevTags) => {
      if (prevTags.find((tg) => tg.id === tag.id)) {
        return prevTags;
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const removeTag = (tag: TagType) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t.id !== tag.id));
  };

  return (
    <TagContext.Provider value={{ selectedTags, addTag, removeTag }}>
      {children}
    </TagContext.Provider>
  );
};
