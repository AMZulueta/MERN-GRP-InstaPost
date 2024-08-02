import { useState, useEffect } from "react";
import {  Link, useNavigate , useParams} from 'react-router-dom';
import axios from "axios";
import Navbar2 from "./Navbar2";
import "./ProfilePage.css"
import photocamera from '../assets/photocamera.png';


const ProfilePage = (props) => {
    const { id } = useParams();
    const [getUSer, setGetUser] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [about, setAbout] = useState("");
    const [avatar, setAvatar] = useState("");
    const [description, setDescription] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [image, setImage] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const [name, setName] = useState(window.localStorage.getItem("appUserName") || "");
    const [userId, setUserId] = useState(window.localStorage.getItem("appUserId") || "");


    useEffect(() => {
        axios.get("http://localhost:8000/api/user/" + userId, { withCredentials: true })
            .then((res) => {     
            // console.log(res.data)
            setGetUser(res.data)

            })
            .catch((err) => console.log(err))
    }, [id]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/userpost/" + userId, { withCredentials: true })
            .then((res) => {     
            console.log(res.data)
            setAllPost(res.data)

            })
            .catch((err) => console.log(err))
    }, [id]);

    const handleImg = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        // console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onloadend = () =>{
        setImage(reader.result);
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const newPost =  {
            description,
            image,
            name,
            userId,
        }
        axios
            .post("http://localhost:8000/api/post",newPost, { withCredentials: true })
            .then((res) => {
                console.log("Creation successful on backend")
                console.log(res)
                
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


    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/post")
    //         .then((res) => {
    //             setAllPost(res.data)
    //             console.log(res.data)
    //         })
    //         .catch((err) => console.log(err))
    // }, []);
    
    return (
        <>
            <Navbar2/>
            <div className="profilepage__container">
                <div className="profile__container">
                    <img className="avatarImg" src={getUSer.avatar} alt="avatar"/>
                    <h1 className="profilepage__user">{getUSer.fname} {getUSer.lname}</h1>
                    <p>{getUSer.about}</p>
                    <p><Link to={`/edit/${userId}`} className="top_button">Edit Profile</Link></p>
                </div>
                <form className="description__post" onSubmit={onSubmitHandler}>
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
                        onChange={handleImg}
                        name="image"
                        accept='.jpeg, .png, .jpg'
                        />
                        <button className="submit">Submit</button>
                    </div>
                </form>
                <div className="display_image">
                    {   
                        allPost.length > 0 && 
                        allPost.map((post, index) => (
                        <div key={index}>
                            <div>
                                <img className="postImg" src={post.image}/>
                                <button onClick={() => deletePost(post._id)}>Delete</button>
                                <Link className="Edit__button"to={`/post/edit/${post._id}` }>Edit</Link>
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