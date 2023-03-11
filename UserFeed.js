import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";                    

const UserFeed = (props) => {
    const navigate = useNavigate();

    // // Use this to check if User is logged in
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/user`, { withCredentials: true })
    //         .then()
    //         .catch((err) => {
    //             console.log(err);
    //             navigate("/login")
    //         });
    // }, []);


return (
    <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Sidebar />
            <Feed />
            <Rightbar />
        </Stack>
    </Box>
    );
};

export default UserFeed; 