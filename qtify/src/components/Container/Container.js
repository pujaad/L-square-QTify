import React,{useState} from "react";
import AlbumCard from "../Card/Card";
import Carousel from "../Carousel/Carousel"
import {Box,Typography,Button} from "@mui/material";
import styles from "./Container.module.css";

const Container = ({ items, collapse,title }) => {

    const [iscollapsed, setIsCollapsed] = useState(collapse)
    return (
        <>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <div className={styles.btn}>
                    <Typography variant="h4">{title}</Typography>
                    {iscollapsed ? (
                        <Button onClick={() => setIsCollapsed(false)} variant="text">Show all</Button>
                    ) : (

                        <Button onClick={() => setIsCollapsed(true)} variant="text">Collapse</Button>
                    )}
                </div>

            </Box>
            {iscollapsed ? (
                <Carousel
                    items={items} />
            ) : (
                <Box className={styles.imgGrid}>
                    {items.map((item) => (
                        <AlbumCard
                            key={item.id}
                            imageUrl={item.image}
                            name={item.title}
                            follows={item.follows}
                        />
                    ))}

                </Box>
            )}
        </>
    );
}





export default Container;