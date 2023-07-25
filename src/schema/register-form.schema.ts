import { ZodRawShape, z } from 'zod';
import { nameTextValidator } from '../enum/validator';

export interface RegisterFormSchema extends ZodRawShape {
  name: z.ZodString;
  lastName: z.ZodString;
  phone: z.ZodString;
  email: z.ZodString;
  password: z.ZodString;
  confirm: z.ZodString;
}

export const registerFormSchema = z.object<RegisterFormSchema>({
  name: z.string().min(2, nameTextValidator.min2).max(30, nameTextValidator.max30),
  lastName: z.string().min(2, nameTextValidator.min2).max(50, nameTextValidator.max50),
  phone: z.string().min(10, nameTextValidator.min10).max(13, nameTextValidator.max13)
  .regex(new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
    "Numero invalido!"),
  email: z.string().min(2, nameTextValidator.min2).max(50, nameTextValidator.max50),
  password: z.string().min(8, nameTextValidator.min8).max(25, nameTextValidator.max50)
  .regex(new RegExp(".*[A-Z].*"), "Un character en mayuscula")
  .regex(new RegExp(".*[a-z].*"), "Un character en minuscula")
  .regex(new RegExp(".*\\d.*"), "un numero")
  .regex(
    new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "Un character especial"
  ),
  confirm: z.string().min(8, nameTextValidator.min8).max(25, nameTextValidator.max50)
  .regex(new RegExp(".*[A-Z].*"), "Un character en mayuscula")
  .regex(new RegExp(".*[a-z].*"), "Un character en minuscula")
  .regex(new RegExp(".*\\d.*"), "un numero")
  .regex(
    new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "Un character especial"
  ),
}).refine((data) => data.password === data.confirm, {
        message: "Passwords no coincide",
        path: ["confirm"],
    });;

export type registerFormSchemaValidator = z.infer<typeof registerFormSchema>; 
