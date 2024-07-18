import styles from  "./Searchbar.module.css" ;

const Search=()=>{
    return(
        <div className={styles.search}>
        <input className={styles.inputSearch} type="text" placeholder="search"></input>
        </div>
        
    )
}
export default Search;