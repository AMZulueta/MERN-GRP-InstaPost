import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./LoginReg.css"

const LoginReg = (props) => {

    const navigate = useNavigate()
    const [state, setState] = useState({
        
        registration: { 
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        login: {
            loginEmail: '',
            loginPw: ''
        }
    })
    const [error, setError] = useState([]);

    const { register, login } = state;

    const handleRegInputs = (e) => {
        setState({...state, register: {...state.register, [e.target.name]: e.target.value}})
    }
    
    const handleRegistration = (e) => {
        e.preventDefault();
        props.setAuthorized("")
        axios.post('http://localhost:8000/api/register', register, {withCredentials: true})
        .then(res => console.log(res))
        .catch((err) => {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
        })
    }

    const handleLoginInputs = (e) => {
        setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', login, {withCredentials: true})
        .then((response)=> {
            console.log(response)
            window.localStorage.setItem("appUserId", response.data._id);
            window.localStorage.setItem("appUserName", response.data.fname);
            navigate(`/userfeed`)
        })
        .catch((err) => {
            console.log(err.response.data.errors);
            setError(err.response.data.errors);
        })

    }

    const handleSignUpClick = () => {
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    };
    
    

return (
    <div className="body">
        <div className="container" id="container">
            <div className="form__container sign_up_container">
                <form className="reg__form" onSubmit={handleRegistration}>
                    <h1 className="heading__reg">Registration Form</h1>
                    <input
                        onChange={handleRegInputs}
                        type="text"
                        name="fname"
                        placeholder="First Name"
                    />
                    <input
                        onChange={handleRegInputs}
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                    />
                    <input
                        onChange={handleRegInputs}
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={handleRegInputs}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        onChange={handleRegInputs}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                    <button >Create Account</button>
                </form>
            </div>
            <div className="form__container sign_in_container">
                <form onSubmit={handleLogin} className="login__form">
                    <h1 className="heading__Login">Login</h1>
                        <input
                        onChange={handleLoginInputs}
                        type="text"
                        name="loginEmail"
                        placeholder="Email"
                        />
                        <input
                        onChange={handleLoginInputs}
                        type="password"
                        name="loginPw"
                        placeholder="Password"
                    />
                        <button>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Insta<span>Post</span></h1>
                        <p>Remember your wonderful core memories</p>
                        <button id="signIn" className="ghost"  onClick={handleSignInClick}>Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Insta<span>Post</span></h1>
                        <p>Remember your wonderful core memories</p>
                        <button  id="signUp" className="ghost" onClick={handleSignUpClick}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default LoginReg;