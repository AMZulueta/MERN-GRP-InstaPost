import React, { useState } from "react";
import { Box, Button, IconButton, Input, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import axios from "axios";


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
                            <Input accept="image/*" id="icon-button-file" type="file" sx={{display: 'none'}} />
                                <IconButton color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        
                                    >
                                    <AddPhotoAlternateIcon />
                                </IconButton>
                        </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" sx={{display: 'none'}} />
                                <IconButton color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        
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