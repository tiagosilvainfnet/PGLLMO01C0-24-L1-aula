import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { AuthTopComponent } from "../../components";

const Register = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return <>
            <AuthTopComponent title_page={'Cadastre-se'} subtitle_page={'Insira seus dados para e cadastrar...'}/>
           </>
}

export default Register;