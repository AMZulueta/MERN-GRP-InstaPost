import React, { useState } from "react";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import Notifications from "@mui/icons-material/Notifications";
import Mail from "@mui/icons-material/Mail";

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '50%'
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]:{
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    [theme.breakpoints.up('sm')]:{
        display: 'flex'
    }
}));


const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <AppBar position='sticky'> 
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block'} }}
                >
                    InstaPost
                </Typography>
                <InstagramIcon sx={{ display: { xs: 'block', sm: 'none'} }} />
                <Search><InputBase placeholder='search...'/></Search>
                <Icons>
                <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30}}
                    src=''
                    onClick = {e=>setOpen(true)}
                    />
                    <Typography variant="span">Aileen</Typography>
                </UserBox>
            </Toolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
        </Menu>
        </AppBar>
    );
};

export default Navbar;