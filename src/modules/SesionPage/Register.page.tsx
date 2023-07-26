
import { Content } from "./loginStyled";
import { useForm } from "react-hook-form";
import useRegister from "./hooks/useRegister.hook";
import { registerStore } from "./sotre/sesion.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { SesionPropsType } from "../../interfaces/ISesion";
import LoadingPage from "../../components/pages/Loading.page";
import { ISesionProps, InputKey } from "./interfaces/ISesionProps";
import usePasswordValidator from "../../hook/usePasswordValidator.hook";
import { Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { registerFormSchema, registerFormSchemaValidator } from "../../schema/register-form.schema";

const RegisterPage = () => {
  const { values } = registerStore();
  const { save, isLoading } = useRegister();
  const { handleChange: handleChangePasword, ...password } = usePasswordValidator();
  const handleChange = registerStore(store => store.changeValue);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<registerFormSchemaValidator>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { ...values, password: password.password, confirm: password.confirm },
    values: { ...values, password: password.password, confirm: password.confirm },
  });

  const submit = handleSubmit(() => {
    const data = watch();
    console.log('guardar', { ...data });
    save({ ...values, } as ISesionProps);
  });

  const inputsValue = (key: SesionPropsType) => register(key, {
    onChange(event) {
      const value = event.target.value;
      handleChange(key, value);
    }
  });

  const passwordSubmit = (key: 'password' | 'confirm') => register(key, {
    onChange(event) {
      const value = event.target.value;
      handleChangePasword({ ...password, [key]: value });
    }
  });

  const listInput:InputKey[] = [
    { label: 'Nombre(s)', key: 'name' },
    { label: 'Apellido(s)', key: 'lastName'},
    { label: 'Telefon', key: 'phone'},
    { label: 'Email', key: 'email'},
  ]

  return (<form onSubmit={submit}>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140, minWidth:320 }}
      image="https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Registro
      </Typography>
        <Content >
          {
            listInput.map(item => {
              const error = errors[item.key];
              const errorStr = error?.message || null;
              return <TextField
                {...inputsValue(item.key)}
                label={item.label} size="small"
                value={values[item.key]}
                error={!!errorStr}
                helperText={errorStr}
              />
            })
          } 
          <TextField
            {...passwordSubmit('password')}
            label='password'
            size="small"
            type='password'
            error={!!errors['password']}
            helperText={errors['password']?.message || ''}
          />
          <TextField
            label='Confirmar.'
            size="small"
            type='password'
            disabled={!password.password}
            {...passwordSubmit('confirm')}
            error={!!errors['confirm']}
            helperText={errors['confirm']?.message || ''}
          />
      </Content>
    </CardContent>
    <Content>
      <Button size="small" variant='contained' type="submit" >Guardar</Button>
    </Content>
    </Card>
    { isLoading && <LoadingPage title="Guardando registro..." /> }
  </form>);
}

export default RegisterPage
