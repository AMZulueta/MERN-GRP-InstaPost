import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import Home from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const Sidebar = ({mode,setMode}) => {
    return (
        <Box flex={1} p={2} mt={5} sx={{ display: { xs: 'none', sm: 'block'} }}
        >
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='/userfeed'>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="friends">
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="/profile">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ModeNightIcon/>
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
                    </ListItem>
                </List>
            </Box>  
        </Box>
    );
};

export default Sidebar;