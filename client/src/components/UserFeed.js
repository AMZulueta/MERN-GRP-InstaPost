// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";                    
import { useState } from "react";

const UserFeed = (props) => {
    // const navigate = useNavigate();

    // // Use this to check if User is logged in
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/user`, { withCredentials: true })
    //         .then()
    //         .catch((err) => {
    //             console.log(err);
    //             navigate("/login")
    //         });
    // }, []);
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme ({
    palette:{
        mode: mode
    }
})

return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={'background.default'} color={"text.primary"}>
            <Navbar />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Sidebar setMode={setMode} mode={mode}/>
                <Feed />
                <Rightbar />
            </Stack>
        </Box>
    </ThemeProvider>
    );
};

export default UserFeed;