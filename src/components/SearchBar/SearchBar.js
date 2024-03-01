import styles from "./SearchBar.module.css";

function SearchBar() {
    return (
        <div id={styles.SearchBar}>
            <div id={styles.searchNav}>
                <a href="/">Best<br />Matched</a>
                <a href="/">Highest<br />Rated</a>
                <a href="/">Best<br />Reviewed</a>
            </div>
            <input 
             placeholder="Search businesses" 
              aria-label="Search businesses"  />
            <input 
              placeholder="Where?" 
               aria-label="Where?"  />
            <div>
                <button>Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;