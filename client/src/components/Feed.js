import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, Avatar, CardMedia, CardActions, Checkbox, IconButton, CardContent, Typography, Tooltip } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import axios from 'axios'
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Feed = () => {

    const { id } = useParams();
    const [posts, setPosts] = useState([])
    const [userData, setUserData] = useState([])
    const [name, setName] = useState(window.localStorage.getItem("appUserName") || "");
    const [userId, setUserId] = useState(window.localStorage.getItem("appUserId") || "");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/post', {withCredentials: true})
            .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    
    function getDate () {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/user' + id, {withCredentials: true})
    //         .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         setUserData(res.data);
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }, [])

    return (
        <Box flex={4} p={2}>
            {posts.map((post, i)=>{
                return <Card key={i} sx={{margin: 5, mt: 8}}>
                    <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: "none" }} aria-label="recipe">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" >
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={post.name}
                    subheader={getDate()}
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={post.image}
                    alt="post image"
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" sx={{padding: '0px', margin: '2px', background: 'none'}}>
                            {/* //add like JS upon clicking icon */}
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ background: 'none' }}>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            })}
            <Tooltip title="add" sx={{ color: 'blue', position: "fixed", marginTop: '1000px', left: { xs: "calc(50% - 25px)", md: 30}}}>
                    <IconButton aria-label="add" color="secondary.dark" href='/profile'>
                        <AddCircleIcon sx={{ fontSize:40 }}/>
                    </IconButton>
            </Tooltip> 
        </Box>
    );
};

export default Feed;