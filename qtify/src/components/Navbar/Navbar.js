import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Feedback from '../FeedbackButton/Feedback';
import styles from "./Navbar.module.css";

const Navbar=()=>{
  return (
    <div className={styles.nav}>
    <Logo/>
    <SearchBar searchText="search a song"/>
    <Feedback text="Give Feedback"/>
    </div>
    
 )
}
export default Navbar;