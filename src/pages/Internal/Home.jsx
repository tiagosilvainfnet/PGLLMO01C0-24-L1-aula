import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyLogin } from '../../utils/auth';
import { TopComponent } from '../../components';

const Home = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Tiago")

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return <>
        <TopComponent hasMenu={true} hasImage={true} title={`Olá, ${username}`} subtitle={'Organize suas ideias...'}/>
    </>
}

export default Home;