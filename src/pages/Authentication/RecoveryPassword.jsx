import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { AuthTopComponent } from "../../components";

const RecoveryPassword = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return <>
            <AuthTopComponent title_page={'Esqueceu a senha'} subtitle_page={'Insira seu e-mail para recuperar a senha...'}/>
           </>
} 

export default RecoveryPassword;