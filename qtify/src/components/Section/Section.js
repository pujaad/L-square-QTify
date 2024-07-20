import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from '@mui/material';
import axios from "axios";
import AlbumCard from "../Card/Card";
import styles from "./Section.module.css";
import Container from "../Container/Container";

const SectionComponent = () => {
    const [albums, setAlbums] = useState([])
    const [newAlbums,setNewAlbums]= useState([])

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
    

    useEffect(() => {
        getNewAlbumsApi()
        getTopAlbumsApi()
    }, [])

    return (
        <>
            <Container
            items={albums}
             collapse={false}
             title="Top Albums"
             />

            <Container
            items={newAlbums}
             collapse={true}
             title="New Albums"
             />
              
        
        </>
    );
}


export default SectionComponent;