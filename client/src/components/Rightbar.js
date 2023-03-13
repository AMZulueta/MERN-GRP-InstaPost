import React from "react";
import { Box, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

const Rightbar = () => {
    return (
        <Box bgcolor='antique white' flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block'} }}
        >
            <Box position='fixed'>
                <TextField sx={{width: '100%'
                }}
                id="outlined-multiline-static"
                multiline
                rows={5}
                placeholder="What's on your mind?"
                />
                <Stack direction='row' gap={1} marginTop={1}>
                    <AddPhotoAlternateIcon color="primary"/>
                    <VideoCameraBackIcon />
                </Stack>
            </Box>
        </Box>
    );
};

export default Rightbar;