import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopComponent } from "../../components";

const Task = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])
    return <>
        <TopComponent hasMenu={false} hasArrowBack={true} hasImage={true} title={`Nova Task`} subtitle={'Crie sua tarefa...'}/>
    </>;
} 

export default Task;