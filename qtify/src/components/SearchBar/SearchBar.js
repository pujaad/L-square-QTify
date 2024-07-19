import styles from  "./Searchbar.module.css" ;

const Search=({searchText})=>{
    return(
        <div className={styles.searchBar}>
        <input className={styles.inputSearch} type="text" placeholder={searchText}></input>
        </div>
       
        
    )
}
export default Search;