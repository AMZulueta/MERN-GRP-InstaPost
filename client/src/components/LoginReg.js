import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "./LoginReg.css"

const LoginReg = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmPw] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener(
        "click", () => container.classList.add("right-panel-active")
    );

    signInButton.addEventListener(
        "click", () => container.classList.remove("right-panel-active")
    );
    
    const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
        fname,
        lname,
        email,
        password,
        confirmpw,
    };

    axios
        .post(`http://localhost:8000/api/user`, newUser, {withCredentials: true,})
        .then((res) => {
            console.log(res);
            console.log(res.data.newUser);

    })
        .catch((err) => {
            console.log(err.response.data.errors);
            
        
        });
    };

    const onSubmitLoginHandler = (e) => {
    e.preventDefault();

    const newUserLogin = {
        loginEmail,
        loginPw,
    };

    axios
        .post(`http://localhost:8000/api/login`, newUserLogin, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            window.localStorage.setItem("appUserId", res.data._id);
            window.localStorage.setItem("appUserName", res.data.fname);
            console.log(res.data);
            navigate("/UserFeed");
        })
        .catch((err) => {
            console.log(err);
        });
};

return (
    <div className="body">
        <div className="container" id="container">
            <div className="form__container sign_up_container">
                <form className="reg__form" onSubmit={onSubmitHandler}>
                    <h1 className="heading__reg">Registration Form</h1>
                    <input
                        onChange={(e) => setFname(e.target.value)}
                        type="text"
                        value={fname}
                        name="fname"
                        placeholder="First Name"
                    />
                    <input
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        value={lname}
                        name="lname"
                        placeholder="Last Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setConfirmPw(e.target.value)}
                        type="password"
                        value={confirmpw}
                        name="cpassword"
                        placeholder="Confirm Password"
                    />
                    <button >Create Account</button>
                </form>
            </div>
            <div className="form__container sign_in_container">
                <form onSubmit={onSubmitLoginHandler} className="login__form">
                    <h1 className="heading__Login">Login</h1>
                        <input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="text"
                        value={loginEmail}
                        name="email"
                        placeholder="Email"
                        />
                        <input
                        onChange={(e) => setLoginPw(e.target.value)}
                        type="password"
                        value={loginPw}
                        name="password"
                        placeholder="Password"
                    />
                        <button>Login</button>
                </form>
            </div>
            <div className="overlay__container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Insta<span>Post</span></h1>
                        <p>Remember your wonderful core memories</p>
                        <button className="ghost" id="signIn">Login</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Insta<span>Post</span></h1>
                        <p>Remember your wonderful core memories</p>
                        <button className="ghost" id="signUp" >Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default LoginReg;
