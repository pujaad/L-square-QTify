import React,{useState,useEffect} from "react";
import {Box,Typography,Button} from '@mui/material';
import axios from "axios";
import AlbumCard from "../Card/Card";
import styles from "./Section.module.css";
import { green } from "@mui/material/colors";

const SectionComponent=()=>{
 const [albums,setAlbums]=useState([])

      const getApi=async()=>{
        try{
    const response=await axios.get("https://qtify-backend-labs.crio.do/albums/top")
          setAlbums(response.data)
      }catch (err){
        console.log(err)
      }
    }
      useEffect(()=>{
        getApi()
       },[])
    
        return (
            <>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <div className={styles.btn}>
            <Typography variant="h4">Top Albums</Typography>
            
            <Button variant="text">Collapse</Button>
            
            </div>
          </Box>
          <Box className={styles.imgGrid}>
            {albums.map((item)=>(
             <AlbumCard 
             key={item.id}
             imageUrl={item.image}
             name={item.title}
             follows={item.follows} 
             />
            ))}

          </Box>
          </>
        );
      }
    

    export default SectionComponent;