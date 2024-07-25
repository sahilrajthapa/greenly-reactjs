import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "yellow",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "purple",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
  color: "#e320bd",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "blue",
};

export const fruitBased: TagType = {
  id: "fruitBased",
  name: {
    fr: "à base de fruits",
    en: "fruitBased",
  },
  type: "diet",
  color: "pink",
};

export const glutenFree: TagType = {
  id: "glutenFree",
  name: {
    fr: "sans gluten",
    en: "glutenFree",
  },
  type: "diet",
  color: "lightgrey",
};

export const tagList: TagType[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
  fruitBased,
  glutenFree,
];
