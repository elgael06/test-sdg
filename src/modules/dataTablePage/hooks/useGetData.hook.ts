
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getData } from "../../../services/data.service";
import { useEffect, useState } from "react";
import { IData } from "../interfaces/IData";

const useGetData = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState<IData[]>([]);

  const consummer = async () => {
    const data = await getData();
    setState([...data])
  }
  
  const { mutate, isLoading } = useMutation({
    mutationFn: consummer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-data'] })
    },
  });

  useEffect(() => {
    mutate()
  }, [])

  return {
    data: state,
    isLoading,
  }
}

export default useGetData
