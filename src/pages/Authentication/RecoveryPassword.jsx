import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";

const RecoveryPassword = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return 'RecoveryPassword'
}

export default RecoveryPassword;