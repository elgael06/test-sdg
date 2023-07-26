import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { saveRegister } from "../../../services/registerSesion.service";
import { ISesionProps } from "../interfaces/ISesionProps";
import { pathName } from "../../../constant/pathName";
import { sesionStore } from "../../../store/sesion.store";
import { registerStore } from "../sotre/sesion.store";

const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const onSingIn = sesionStore(sotre => sotre.onSingIn);
  const clearValues = registerStore(store => store.clearValues );

  const save = async (value: ISesionProps) => {
    const data = await saveRegister(value);
    if (!!data) {
      onSingIn({
        name: value.name,
        lastName: value.lastName,
        email: value.email,
        phone: value.phone,
      });
      clearValues();
      navigate(pathName.home);
    }

  };
  
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: save,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['save-register'] })
    },
  });

  return {
    save: mutate,
    isLoading,
    isError,
    error,
  };
}

export default useRegister
