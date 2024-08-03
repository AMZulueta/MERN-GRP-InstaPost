import React, { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import { Box, Button, IconButton, Input, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import axios from "axios";
import { useParams } from "react-router-dom";

const Rightbar = (props) => {
    const { id } = useParams();
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');


    const onSubmitHandler = (e) => {
        e.preventDefault();



const Rightbar = (props) => {
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('successfully added')

        const newPost =  {
            description,
            image,
        }

    axios
        .post('http://localhost:8000/api/post', newPost)
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    return (
        <Box bgcolor='antique white' flex={2} p={2}  sx={{ display: { xs: 'none', sm: 'block'} }}
        >
            <Box position='fixed' mt={8}>

                <TextField sx={{width: '100%'
                }}
                id="outlined-multiline-static"
                multiline
                rows={5}
                placeholder="What's on your mind?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <Stack direction='row' gap={1} marginTop={1}>
                    <AddPhotoAlternateIcon color="primary"
                        type='file'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <VideoCameraBackIcon />
                </Stack>
                <ButtonGroup
                    variant="contained" 
                    aria-label="outlined primary button group"
                >
                    <Button onSubmit={onSubmitHandler}>Post</Button>
                </ButtonGroup>
                <form onSubmit={onSubmitHandler}>
                    <TextField sx={{width: '100%'
                    }}
                    id="outlined-multiline-static"
                    multiline
                    rows={5}
                    placeholder="What's on your mind?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <Stack direction='row' gap={1} marginTop={1}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => setImage(e.target.value)} sx={{display: 'none'}} />
                                <IconButton color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        value={image}
                                >
                                    <AddPhotoAlternateIcon />
                                </IconButton>
                        </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => setImage(e.target.value)} sx={{display: 'none'}} />
                                <IconButton color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        value={image}
                                >
                                    <VideoCameraBackIcon />
                                </IconButton>
                        </label>
                    </Stack>
                        <Button variant="contained" type="submit">Post</Button>
                </form>
            </Box>
        </Box>
    );
};

export default Rightbar;