import React from "react";
import assets from "../../assets/images/Group.svg";
import style from "./Logo.module.css";
const Logo=()=>{
    return(
       
        <img src={assets} className={style.logoCenter} alt="logo"></img>
       
    )
}
export default Logo;