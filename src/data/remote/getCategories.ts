import { handleErrors } from "../../utils";
import { APICategoriesResponse } from "../models/api";
import client from "./client";

const getCategories = async () => {
  const data = await client<APICategoriesResponse>('browse/categories');
  const result = handleErrors(data);
  return result.categories.items;
};

export default getCategories;
