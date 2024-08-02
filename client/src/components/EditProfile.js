import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar2 from "./Navbar2";
import "./EditProfile.css"

const EditProfile = (props) => {

    const { id } = useParams();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [about, setAbout] = useState("");
    const [avatar, setAvatar] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const [userId, setUserId] = useState(window.localStorage.getItem("appUserId") || "");

    useEffect(() => {
        axios.get("http://localhost:8000/api/user/" + userId, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setFname(res.data.fname);
                setLname(res.data.lname);
                setAbout(res.data.about);
                setAvatar(res.data.avatar);
                
            })
            .catch((err) => console.log(err))
    }, [id]);

    const handleImg = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onloadend = () =>{
        setAvatar(reader.result);
        }
    }

    const onSubmitHandler2 = (e) => {
        e.preventDefault();

        const updatedProfile = {
            fname,  
            lname, 
            about, 
            avatar, 
        }

        axios
            .put("http://localhost:8000/api/user/update/" + userId, updatedProfile, { withCredentials: true })
            .then((res) => {
                console.log("Update profile successful", res);
                navigate(`/profile/${userId}`, { replace: true });
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setError(err.response.data.error.errors);
            });
    }

return (
    <>
        <Navbar2 />
        <div className="edit__container">
            <div className="user">
                <img src={avatar} />
                <h1>{fname} {lname}</h1>
                <p>{about}</p>
            </div>
            <div className="subcontainer__2">
                <form className="reg__form" onSubmit={onSubmitHandler2}>
                <div className="edit__fname">
                    <input
                        placeholder="First Name"
                        type="text"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)} />
                    <div className="error__box">
                        {(fname.length >0 && fname.length <=2) ? < i  > Must be atleast 3 characters.</i> : ""}
                        <br/>{error.fname ? <i className="err-msg">{error.fname.message}</i> : null}    
                    </div>
                </div>
                <div className="edit__lname">
                    <input
                        placeholder="Last Name"
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)} />
                    <div className="error__box">
                        {(lname.length >0 && lname.length <=2) ? < i  > Must be atleast 3 characters.</i> : ""}
                        <br/>{error.lname ? <i className="err-msg">{error.lname.message}</i> : null}    
                    </div>
                </div>
                <div className="edit__about">
                    <textarea
                        placeholder="About"
                        type="text"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)} />
                    <div className="error__box">
                        {/* {(about.length > 0 && about.length >= 40) ? < i > Must not excide to 40 characters.</i> : ""} */}
                        <br />{error.about ? <i className="err-msg">{error.about.message}</i> : null}
                    </div>
                </div>
                <div className="edit__avatar">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        onChange={handleImg} />
                </div>
                <button >Update</button>
                </form>
            </div>
        </div>
    </>
    );
};

export default EditProfile; 