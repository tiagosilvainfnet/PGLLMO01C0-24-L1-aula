import { ButtonComponent, TextFieldComponent, BoxComponent, AuthTopComponent, StackComponent } from "../../components"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { login, verifyLogin } from "../../utils/auth";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";

const Login = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    const [email, setEmail] = useState("tiago");
    const [senha, setSenha] = useState("");

    function entrarNoApp(){
        console.log(email)
        console.log(senha)

        login({email, senha}, navigate)
    }

    return <>
            <AuthTopComponent title_page={'Bem-vindo'} subtitle_page={'Efetue login para entrar...'}/>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleOutlined />
                        </InputAdornment>
                        ),
                    }}
                    variant="filled" fullWidth={true} label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        ),
                      }}
                    variant="filled" fullWidth={true} label="Password" value={senha} type="password" onChange={(e) => setSenha(e.target.value)}/>
            </BoxComponent> 
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                    fullWidth={true} 
                    label="Entrar" onClick={entrarNoApp}/>
            </BoxComponent> 
            <StackComponent sx={{mt: 4, mb: 4}} alignItems={'center'}>
                <Link style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '200 !important',
                    fontSize: 16
                }} to="/register">Cadastrar-me</Link>
            </StackComponent>
    </>
}

export default Login;