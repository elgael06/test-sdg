import { useState } from "react";

export interface IPasswordValidator {
  password: string;
  confirm: string;
}

const initialState: IPasswordValidator = {
  password: '',
  confirm: '',
}

const usePasswordValidator = () => {
  const [state, setState] = useState(initialState)

  return {
    ...state,
    handleChange: setState,
  }
}

export default usePasswordValidator
