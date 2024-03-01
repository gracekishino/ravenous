import styles from "./SearchBar.module.css";
import { useState } from "react";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rating": "rating",
    "Most Reviewed": "review_count",
}

// mock data
const business2 = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: ' Pizzeria Ciro',
    address: 'Ginza Dori',
    city: 'Tokyo',
    state: 'TY',
    zipCode: '1690074',
    category: 'Italian',
    rating: 5,
    reviewCount: 90
};

function SearchBar({ setResults }) {

    const [ sortByOption, setSortByOption ] = useState("rating");
    const [ searchText, setSearchText ] = useState('');
    const [ searchLocation, setSearchLocation ] = useState('');
  
    const doSearch = () => {
      if (searchText !== '' || searchLocation !=='') {
        // TODO request results from yelp API
        console.log(`option: ${sortByOption} text: ${searchText} location: ${searchLocation}`)
        const yelpResults = [business2, business2, business2, business2, business2, business2];
        setResults(yelpResults); 
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
                onChange={handleSearchTextChange}
                placeholder="Search businesses" 
                aria-label="Search businesses"  />
            <input 
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