import React, { useState, useEffect } from "react";
import { Box, Card, CardHeader, Avatar, CardMedia, CardActions, Checkbox, IconButton, CardContent, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";

const Feed = () => {

    const { id } = useParams();

    return (
        <Box flex={4} p={2}>
            <Card sx={{margin: 5, mt: 8}}>
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
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016" 
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image=""
                    alt="Paella dish"
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {/* //insert object from post description */}
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
            <Card sx={{margin: 5}}>
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
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016" 
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image=""
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {/* //insert object from post description */}
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
            <Card sx={{margin: 5}}>
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
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016" 
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image=""
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {/* //insert object from post description */}
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
            <Card sx={{margin: 5}}>
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
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016" 
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image=""
                    alt="Paella dish"
                />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {/* //insert object from post description */}
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
        
        </Box>
    );
};

export default Feed;