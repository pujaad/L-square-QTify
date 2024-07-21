import { React, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SongCarousel from "../SongCarousel/SongCarousel";

import { Typography } from "@mui/material";
import styles from "./Tabs.module.css";


export default function Tabs({ songs, genres, title }) {
    const [value, setValue] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterSongs = value === "" ? songs : songs.filter(s => s.genre.key === value)

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <div className={styles.btn}>
                    <Typography variant="h4">{title}</Typography>
                </div>

            </Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All" value="" />
                        {genres.map((genre) => (
                            <Tab key={genre.key} label={genre.label} value={genre.key} />
                        ))}
                    </TabList>
                </Box>
                <TabPanel value="">
                    <SongCarousel items={songs} />
                </TabPanel>
                {genres.map((genre) => (
                    <TabPanel value={genre.key}>
                        <SongCarousel items={filterSongs} />
                    </TabPanel>
                ))}

            </TabContext>
        </Box>
    );
}