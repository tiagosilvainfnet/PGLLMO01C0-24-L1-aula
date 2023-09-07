import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Loading } from './components';

const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const RecoveryPassword = lazy(() => import('./pages/Authentication/RecoveryPassword'));
const Home = lazy(() => import('./pages/Internal/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return <Router>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/recovery-password">Recovery</Link>
    <br/>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>;
}

export default App;
