import { useEffect, useState } from "react";
import { alertStore } from "../../../store/alert.store";
import { ICategory } from "../interfaces/ICategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "../../../services/cocktails.service";

const useGetCategory = () => {
  const queryClient = useQueryClient();
  const [data, setData] = useState<ICategory[]>()

  const consummer = async () => {    
    const values = await getCategories()
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

export default useGetCategory
