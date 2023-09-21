import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopMenuComponent } from "../../components";

const Profile = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])
    return <>
            <TopMenuComponent hasMenu={true} hasArrowBack={false} hasImage={true}/>
           </>;
}

export default Profile;