import styles from "./SearchBar.module.css";
import { useState } from "react";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rating": "rating",
    "Most Reviewed": "review_count",
}

function SearchBar({ setResults, getBusinesses }) {

    const [ sortByOption, setSortByOption ] = useState("rating");
    const [ searchText, setSearchText ] = useState('');
    const [ searchLocation, setSearchLocation ] = useState('');
  
    const doSearch = async () => {
      if (searchText !== '' || searchLocation !=='') {

        const yelpResults = await getBusinesses(searchLocation, searchText, sortByOption);
        setResults(yelpResults.businesses); 
      }  
    }
    
        
    const handleOptionChange = (event) => {
        setSortByOption(event.target.id);
    }

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }
    
    const HandleSearchLocationChange = (event) => {
        setSearchLocation(event.target.value);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((option) => {
            let optionValue = sortByOptions[option];
            return <li id={optionValue} key={optionValue} className={optionValue === sortByOption ? styles.active : ""} onClick={handleOptionChange}>{option}</li>
        })
    }

    return (
        <div id={styles.SearchBar}>
            <ul id={styles.searchNav}>
                {renderSortByOptions()}
            </ul>
            <input 
                id="searchInput"
                onChange={handleSearchTextChange}
                placeholder="Search businesses" 
                aria-label="Search businesses"  />
            <input 
                id="whereInput"
                onChange={HandleSearchLocationChange}
                placeholder="Where?" 
                aria-label="Where?"  />
            <div>
                <button onClick={doSearch} >Let's Go</button>
            </div>
        </div>
    );
}

export default SearchBar;