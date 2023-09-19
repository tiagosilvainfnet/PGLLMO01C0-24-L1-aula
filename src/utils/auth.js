import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";

const userIsLoggedIn = () => {
    const user = window.localStorage.getItem('user');
    if(user) return JSON.parse(user);
    return null;
}

const verifyLogin = (loggoutRoutes, currentPath, navigate) => {
    const isLoggedIn = userIsLoggedIn();

    if(isLoggedIn && loggoutRoutes.includes(currentPath)){
        navigate('/')
    }else if(!isLoggedIn && !loggoutRoutes.includes(currentPath)){
        navigate('/login')
    }
}

const saveLogin = (data) => {
    window.localStorage.setItem('user', JSON.stringify(data));
}

const login = async (firebaseApp, data, navigate, setShowResendEmail) => {
    try{
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password)
        const {email, displayName, emailVerified, photoURL, uid, accessToken} = response.user;

        if(emailVerified){
            saveLogin({email, displayName, photoURL, uid, accessToken});
            navigate('/');
            setShowResendEmail(false)
        }else{
            alert("Você precisa confirmar seu e-mail.")
            setShowResendEmail(true)
        }
    }catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('Dados de usuário inválidos.')
        }else{
            alert(e.toString())
        }
    }
}

const confirmAccount = async (user) => {
    await sendEmailVerification(user);
}

const resendEmail = async (firebaseApp, data, setShowResendEmail) => {
    try{
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password)
        await confirmAccount(response.user);
        setShowResendEmail(false);
        alert("E-mail reenviado.");
    }catch(e){
        alert(e)
    }
}

const register = async (firebaseApp, data) => {
    try{
        const auth = getAuth(firebaseApp);
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
        await confirmAccount(response.user);
        alert("Usuário cadatrado com sucesso. Verifique sua caixa de mensagem.")
    }catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('E-mail inválido.')
        }else if(e.toString().indexOf('auth/wrong-password') > -1){
            alert('Password Inválido.')
        }else if(e.toString().indexOf('auth/weak-password') > -1){
            alert('A senha precisa ter 6 ou mais caractéres.')
        }else{
            alert(e.toString())
        }
    }
}

const logout = async (firebaseApp, navigate) => {
    window.localStorage.clear();
    navigate('/login');
}

export {
    verifyLogin,
    login,
    logout,
    resendEmail,
    register
}