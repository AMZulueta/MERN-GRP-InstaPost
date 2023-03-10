import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Registration = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmPw] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState([]);
    
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
            navigate("/");

    })
        .catch((err) => {
            console.log(err.response.data.errors);
            
        
        });
    };
    
    return (
        <div className="reg__container">
            <form className="regform" onSubmit={onSubmitHandler}>
                <h1 className="heading__reg">Registration</h1>

                <div>
                    <label>First Name:*</label>
                    <input
                        onChange={(e) => setFname(e.target.value)}
                        type="text"
                        value={fname}
                        name="fname"
                    />
                </div>

                <div>
                    <label>Last Name:*</label>
                    <input
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        value={lname}
                        name="lname"
                    />
                </div>

                <div>
                    <label>Email:*</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                        name="email"
                    />
                </div>

                <div>
                    <label>Password:*</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        name="password"
                    />
                </div>

                <div>
                    <label>ConfirmP:*</label>
                    <input
                        onChange={(e) => setConfirmPw(e.target.value)}
                        type="password"
                        value={confirmpw}
                        name="cpassword"
                    />
                </div>

                <input className="Create__button" type="submit" value="Create Account" />
                <p className="note">* Indicates a require field</p>
            </form>
            <Link className="button__ToLogin" to="/">Login</Link>
        </div>
    );
};

export default Registration;
