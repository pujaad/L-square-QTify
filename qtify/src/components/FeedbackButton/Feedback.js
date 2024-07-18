import React from "react";
import assets from "../../assets/images/FeedbackButton.svg";
import styles from "./FeedbackButton.module.css";

const Feedback=({text})=>{
    return(
        <div className="button">
        <button className={styles.feedbackButton}>{text}</button>
        </div>
        
    )
}
export default Feedback;