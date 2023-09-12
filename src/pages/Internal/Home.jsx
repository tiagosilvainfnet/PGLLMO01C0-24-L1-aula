import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyLogin } from '../../utils/auth';

const Home = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return <>Home</>
}

export default Home;