import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { DataModel } from "../data/datamodel";

const userIsLoggedIn = async (firebaseApp) => {
    const dataModel = new DataModel('user', firebaseApp);
    const user = await dataModel.getLocal();
    if(user.length > 0){
        return user[0]
    }
    return null;
}

const verifyLogin = async (loggoutRoutes, currentPath, navigate, firebaseApp) => {
    const isLoggedIn = await userIsLoggedIn(firebaseApp);
    
    if(isLoggedIn && loggoutRoutes.includes(currentPath)){
        navigate('/')
    }else if(!isLoggedIn && !loggoutRoutes.includes(currentPath)){
        navigate('/login')
    }
}

const sendPasswordReset = async (firebaseApp, email, navigate) => {
    try{
        const auth = getAuth(firebaseApp);
        await sendPasswordResetEmail(auth, email);
        alert("Link de recuperação enviado com sucesso!");
        navigate('/login');
    }catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('Dados de usuário inválidos.')
        }else{
            alert(e.toString())
        }
    }
}

const saveLogin = (firebaseApp, data) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.createLocal(data, data.uid)
}

const login = async (firebaseApp, data, navigate, setShowResendEmail) => {
    try{
        const auth = getAuth(firebaseApp);
        const response = await signInWithEmailAndPassword(auth, data.email, data.password)
        const {email, displayName, emailVerified, photoURL, uid, accessToken} = response.user;

        if(emailVerified){
            saveLogin(firebaseApp, {email, displayName, photoURL, uid, accessToken});
            updateUserStatus(firebaseApp, uid)

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

const register = async (firebaseApp, data, navigate) => {
    try{
        const auth = getAuth(firebaseApp);
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
        await confirmAccount(response.user);

        
        const {email, displayName, emailVerified, photoURL, uid} = response.user;
        await saveUserInDatabase(firebaseApp, {email, displayName, emailVerified, photoURL, uid});
        alert("Usuário cadatrado com sucesso. Verifique sua caixa de mensagem.")
        navigate('/login');
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
    const dataModel = new DataModel(null, firebaseApp);
    dataModel.clearDatabase(['user', 'task', 'category']);

    navigate('/login');
}

const saveUserInDatabase = async (firebaseApp, user) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.create(user)
}

const updateUserStatus = async(firebaseApp, id) => {
    const dataModel = new DataModel('user', firebaseApp);
    dataModel.update({'emailVerified': true}, id);
}

export {
    verifyLogin,
    login,
    logout,
    resendEmail,
    register,
    sendPasswordReset
}