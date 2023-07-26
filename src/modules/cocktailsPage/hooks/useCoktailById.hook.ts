import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCoktailById } from "../../../services/cocktails.service";
import { alertStore } from "../../../store/alert.store";
import { IDrink } from "../interfaces/IDrink";
import { useEffect, useState } from "react";

const useCoktailById = (id: string) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState<IDrink>()
  const onCloseAlert = alertStore(store => store.onClose);
  const onChangeAlert = alertStore(store => store.onChange);

  const consummer = async () => {    
    const values = await getCoktailById(id)
    onChangeAlert({
      title: `success: ${values?.strDrink} drinks get!`,
      isVisible: true,
      type: 'success'
    })
    setTimeout(onCloseAlert, 1200)
    console.log('debug->', values);
    if (values !== null) setData(values);
  }
  
  const { mutate, isLoading, } = useMutation({
    mutationFn: consummer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-coktails'] })
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

export default useCoktailById
