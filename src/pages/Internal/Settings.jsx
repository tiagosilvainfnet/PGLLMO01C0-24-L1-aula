import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, verifyLogin } from "../../utils/auth";
import { ButtonComponent } from "../../components";

const Settings = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return <>
        Settings
        <ButtonComponent label="Sair" onClick={() => logout(navigate)}/>
    </>;
}

export default Settings;