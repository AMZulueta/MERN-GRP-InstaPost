import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    
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
            navigate("/Userfeed");
        })
        .catch((err) => {
            console.log(err);
        });
};

    return (
      <div>
        <Link className="button__ToRegistration" to="/Registration">Register</Link>
        <form onSubmit={onSubmitLoginHandler} className="loginform">
                
                <div  className="email__container">
                    <label>Email:*</label>
                    <input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="text"
                        value={loginEmail}
                        name="email"
                    />   
                </div>
                
                <div>
                    <label>Password:*</label>
                    <input
                        onChange={(e) => setLoginPw(e.target.value)}
                        type="password"
                        value={loginPw}
                        name="email"
                    />
                </div>
                
                <div>
                    <input className="Create" type="submit" value="Submit" />
                </div>
           </form>
           <Link className="button__ToRegistration" to="/Registration">Register</Link>
      </div>
      );
};
export default Login;
