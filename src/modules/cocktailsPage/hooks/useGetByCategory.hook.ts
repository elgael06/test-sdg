import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCocktailbycategory } from "../../../services/cocktails.service";
import { IDrink } from "../interfaces/IDrink";

const useGetByCategory = (category: string) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState<IDrink[]>()

  const consummer = async () => {    
    const values = await getCocktailbycategory(category)
    console.log('debug->', values);
    setData(values);
  }
  
  const { mutate, isLoading, } = useMutation({
    mutationFn: consummer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-categories'] })
    },
  });

  useEffect(() => {
    mutate()
  }, [])

  return {
    data,
    isLoading,
  }
}

export default useGetByCategory
