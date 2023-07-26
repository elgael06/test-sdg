import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react"
import { searchCocktails } from "../../../services/cocktails.service";
import { IDrink } from "../interfaces/IDrink";
import { alertStore } from "../../../store/alert.store";


const useSerachCocktail = () => {
  const queryClient = useQueryClient();
  const [value, setvalue] = useState('');
  const [data, setData] = useState<IDrink[]>([])
  const onChangeAlert = alertStore(store => store.onChange);
  const onCloseAlert = alertStore(store => store.onClose);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const consummer = async () => {    
    const values = await searchCocktails(value)
    onChangeAlert({
      title: `success: ${values.length} drinks gets!`,
      isVisible: true,
      type: 'success'
    })
    setTimeout(onCloseAlert, 1200)
    console.log('debug->', values);
    setData(values);
  }
  
  const { mutate, isLoading, isError, error, reset } = useMutation({
    mutationFn: consummer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['search-coktails'] })
    },
  });

  useEffect(() => {
    if (isLoading) {
      reset()
    } else {
      timerRef.current = setTimeout(() => {
        mutate();
        clearInterval(timerRef.current)
      }, 800)
    }
  }, [value])

  const handleChange = (search: string) => {
    clearInterval(timerRef.current)
    setvalue(search);
  }
  return {
    value,
    data,
    setvalue: handleChange,
    isLoading, isError, error,
  }
}

export default useSerachCocktail
