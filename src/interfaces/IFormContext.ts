
export default interface IFormContext<T> {
  /*
  @description: 
  */ 
    inputReg: (key: T) => Object;
    errors: any;
    isLoading: boolean;
    isReadOnly: boolean;
  }