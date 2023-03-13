import { useState, useEffect } from "react";
import {  Link, useNavigate , useParams} from 'react-router-dom';
import axios from "axios";
import Navbar2 from "./Navbar2";
import "./ProfilePage.css"
import photocamera from '../assets/photocamera.png';

const ProfilePage = (props) => {
    const { id } = useParams();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [about, setAbout] = useState("");
    const [avatar, setAvatar] = useState("");
    const [description, setDescription] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [image, setImage] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/??????/" + id, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setFname(res.data.fname);
                setLname(res.data.lname);
                setAvatar(res.data.avatar);
                
            })
            .catch((err) => console.log(err))
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const newPost = {
            fname,
            lname,
            avatar,
            description,
            image,
        }

        axios
            .post("http://localhost:8000/api/?????",newPost, { withCredentials: true })
            .then((res) => {
                console.log("Creation successful on backend")
                console.log(res)
                window.location.reload();
                
            })
            .catch((err) => {
                    console.log(err);
                    setError(err.response.data.error.errors);
            })
    }

    const deletePost = (PostId) => {
    axios.delete("http://localhost:8000/api/post/" + PostId)
            .then(() => {
                console.log("Successful deleted from backend");
                removeFromDom(PostId);
                window.location.reload();

            })
            .catch((err) => console.log(err));  
    }

    const removeFromDom = (PostId) => {
        setAllPost(allPost.filter(post => post.id !== PostId));
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/post")
            .then((res) => setAllPost(res.data))
            .catch((err) => console.log(err))
    }, []);
    
    return (
        <>
            <Navbar2/>
            <div className="profilepage__container">
                <div className="profile__container">
                    <p>{avatar}</p>
                    <h1 className="profilepage__user">{fname} {lname}</h1>
                    <p>{about}</p>
                    <p><Link to={'/EditProfile'} className="top_button">Edit Profile</Link></p>
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
                        <button className="submit">Submit</button>
                    </div>
                </form>
                <div className="display_image">
                    {   
                        allPost.length > 0 && 
                        allPost.map((post, index) => (
                        <div key={index}>
                            <div>
                                <img src={image}/>
                                <button onClick={() => deletePost(post._id)}>Delete</button>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
