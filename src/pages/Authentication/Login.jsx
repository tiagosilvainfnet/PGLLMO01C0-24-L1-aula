import { ButtonComponent, TextField } from "../../components"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("tiago");
    const [senha, setSenha] = useState("");

    function entrarNoApp(){
        console.log(email)
        console.log(senha)
    }

    return <>
        <TextField label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Password" value={senha} type="password" onChange={(e) => setSenha(e.target.value)}/>
        <ButtonComponent label="Entrar" onClick={entrarNoApp}/>
    </>
}

export default Login;