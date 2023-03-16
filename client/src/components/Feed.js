import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, Avatar, CardMedia, CardActions, Checkbox, IconButton, CardContent, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import axios from 'axios'

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

    useEffect(()=>{
        axios.get('http://localhost:8000/api/user' + id, {withCredentials: true})
            .then((res)=>{
            console.log(res);
            console.log(res.data);
            setUserData(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <Box flex={4} p={2}>
            {posts.map((post, i)=>{
                return <Card key={i} sx={{margin: 5, mt: 8}}>
                    <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        A
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={post.name}
                    subheader="September 14, 2016" 
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={post.image}
                    alt="Paella dish"
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.description}
                </Typography>
            </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                            {/* //add like JS upon clicking icon */}
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            })}
        </Box>
    );
};

export default Feed;
