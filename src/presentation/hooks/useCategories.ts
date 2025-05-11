import { useEffect, useState } from "react";
import { ICard } from "../../domain/models/types";
import { categoriesMapper } from "../../data/mappers";
import { getCategories } from "../../data/remote";

const useCategories = () => {
  const [categories, setCategories] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onGetCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(categoriesMapper(response));
    } catch (error) {
      console.log("Error fetching categories:", error);
      //TO DO: Show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onGetCategories();
  }, []);

  return { categories, isLoading };
};

export default useCategories;
