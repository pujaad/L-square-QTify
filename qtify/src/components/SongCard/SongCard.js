import React from "react";
import {Card, CardContent, CardMedia, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const SongCard= ({ imageUrl, name, likes}) => {

    return (
        
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageUrl}
                alt={name}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label={`${likes} likes`} />
                </Stack>
            </CardContent>
        </Card>
    )
}
export default SongCard;