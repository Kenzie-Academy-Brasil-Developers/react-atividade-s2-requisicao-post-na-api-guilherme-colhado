import { ContainerLogin } from "./style";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";

export default function Login({setResponse}) {
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    nomeUsuario: yup.string().required("Campo Obrigatório"),
    senha: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(formSchema)})

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  

  const onSubmitFunction = (data) => {
    setLoading(true)
    setResponse('')
    axios.post('https://kenzieshop.herokuapp.com/sessions/', formData)
      .then(res=>setResponse('completa'))
      .catch(res=>setResponse('falha'))
    setTimeout(()=>{
      setLoading(false)
    },500)
  }

  return (
    <ContainerLogin>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="userName">User Name</InputLabel>
          <OutlinedInput
            id="userName"
            {...register('nomeUsuario')}
            type="text"
            label="User Name"
            onChange={(e)=>setFormData({...formData, username:e.target.value})}
            sx={{ backgroundColor: "#ffffff86" }}
          />
          <FormHelperText>{errors.nomeUsuario?.message}</FormHelperText>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <OutlinedInput
            id="senha"
            {...register('senha')}
            sx={{ backgroundColor: "#ffffff86" }}
            type={showPassword ? "text" : "password"}
            onChange={(e)=>setFormData({...formData, password:e.target.value})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
          <FormHelperText>{errors.senha?.message}</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          endIcon={!loading ? <SendIcon edge="end" /> : undefined}
          disabled = {loading}
          sx={{ padding: "10px" }}
        >
          {loading ? <svg className="loading" viewBox="25 25 50 50">
            <circle className="loading-circle" cx="50" cy="50" r="15"></circle>
          </svg>:<p>Enviar</p>}
        </Button>
      </form>
    </ContainerLogin>
  );
}
