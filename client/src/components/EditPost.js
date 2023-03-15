import { useState, useEffect } from "react";
import {  Link, useNavigate , useParams} from 'react-router-dom';
import axios from "axios";
import Navbar2 from "./Navbar2";
import "./ProfilePage.css"
import photocamera from '../assets/photocamera.png';


const EditPost = (props) => {
    const { id } = useParams();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [avatar, setAvatar] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/post/" + id, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setFname(res.data.fname);
                setLname(res.data.lname);
                setAvatar(res.data.avatar);
                setDescription(res.data.description)
                setImage(res.data.image)
                
            })
            .catch((err) => console.log(err))
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const updatedPost = {
            fname,
            lname,
            avatar,
            description,
            image,
        }

    

        axios
            .put("http://localhost:8000/api/post/" + id,updatedPost, { withCredentials: true })
            .then((res) => {
                console.log("Update successful on backend", res);
                navigate('/User', { replace: true });
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setError(err.response.data.error.errors);
            });
    }


    return (
        <>
            <Navbar2/>
            <div className="profilepage__container">
                <div className="profile__container">
                    <p>{avatar}</p>
                    <h1 className="profilepage__user">{fname} {lname}</h1>
                </div>
                <form className="description__post"onSubmit={onSubmitHandler}>
                    <textarea
                        className="description__text"
                        placeholder="What is your new core memories this day?"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    <div className="description_control">
                        <img className="camera" src={photocamera} alt="photo" />
                        <input
                        className="camera_input"
                        type="file"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                        <button className="submit">Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditPost;
