import React from "react";
import { Box, Card, CardHeader } from "@mui/material";

const Feed = () => {
    return (
        <Box flex={4} p={2}>Feed</Box>
        <Card>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"// insert post description
                subheader="September 14, 2016" //insert created at
            />
            <CardMedia
                component="img"
                height="20%"
                image={} // insert obj/image usestate from user
                alt="Paella dish"
            />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                //insert object from post description
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                    //add like JS upon clicking icon
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </Card>
    );
};

export default Feed;