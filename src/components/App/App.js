import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import './App.module.css';
import { getBusinesses } from "../../utils/Yelp";

function App() {
  const [ results, setResults ] = useState([]);

  return (
    <div>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar setResults={setResults} getBusinesses={getBusinesses} />
        <BusinessList results={results} />
      </main>
      <footer>
          Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>

  );
}

export default App;
