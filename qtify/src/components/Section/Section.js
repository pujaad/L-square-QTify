import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from '@mui/material';
import axios from "axios";
import AlbumCard from "../Card/Card";
import styles from "./Section.module.css";
import Container from "../Container/Container";
import Tabs from "../Tabs/Tabs";
const SectionComponent = () => {
    const [albums, setAlbums] = useState([])
    const [newAlbums, setNewAlbums] = useState([])
    const [songs, setSongs] = useState([])
    const [genres, setGenres] = useState([])
    const getTopAlbumsApi = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            setAlbums(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getNewAlbumsApi = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/new")
            setNewAlbums(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getSongsApi = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/songs")
            setSongs(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getGenresApi = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/genres")
            setGenres(response.data.data)
        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        getNewAlbumsApi()
        getTopAlbumsApi()
        getSongsApi()
        getGenresApi()
    }, [])

    return (
        <div className={styles.background}>
            <Container
                items={albums}
                collapse={true}
                title="Top Albums"
            />

            <Container
                items={newAlbums}
                collapse={true}
                title="New Albums"
            />

            <Tabs genres={genres} songs={songs} title="Songs"/>
        </div>
    );
}


export default SectionComponent;