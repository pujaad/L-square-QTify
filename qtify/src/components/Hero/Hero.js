import assets from "../../assets/images/Hero.svg";
import styles from "./Hero.module.css"
const Hero=()=>{
    return (
    <div className={styles.hero}>
    <h2 className={styles.text}>100 Thousand songs, ad-free </h2>
        <br></br>
    <h2> Over thousands podcast episodes</h2>
       
    <span><img src={assets} alt="headphones"></img></span>
    </div>
    )
}
export default Hero;