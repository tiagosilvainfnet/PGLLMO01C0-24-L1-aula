import { ButtonComponent, TextField } from "../../components"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login, verifyLogin } from "../../utils/auth";

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
        <TextField label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Password" value={senha} type="password" onChange={(e) => setSenha(e.target.value)}/>
        <ButtonComponent label="Entrar" onClick={entrarNoApp}/>
    </>
}

export default Login;