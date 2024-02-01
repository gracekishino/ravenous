function SearchBar() {
    return (
        <div id="SearchBar">
            <div id="search-nav">
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