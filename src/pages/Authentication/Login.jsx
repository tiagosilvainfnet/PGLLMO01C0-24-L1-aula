import { ButtonComponent, TextFieldComponent } from "../../components"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login, verifyLogin } from "../../utils/auth";
import { Box } from "@mui/material";

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
            <Box
                component="div"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent variant="filled" fullWidth={true} label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            </Box>
            <Box
                component="div"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent variant="filled" fullWidth={true} label="Password" value={senha} type="password" onChange={(e) => setSenha(e.target.value)}/>
            </Box> 
            <Box
                component="div"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    fullWidth={true} 
                    label="Entrar" onClick={entrarNoApp}/>
            </Box> 
    </>
}

export default Login;