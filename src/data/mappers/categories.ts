import { ICard } from "../../domain/models/types";
import { Category } from "../models/api";

const categoriesMapper = (categories: Category[]): ICard[] => {
  const result: ICard[] = [];

  if (categories.length === 0) {
    return [];
  }

  categories
    .filter((playlist) => playlist !== null)
    .forEach((item) => {
      result.push({
        id: item?.id ?? "",
        name: item?.name ?? "",
        image: item?.icons[0].url,
        description: "",
      });
    });
  return result;
};

export default categoriesMapper;
