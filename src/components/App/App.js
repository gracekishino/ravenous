import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import './App.module.css';


// mock data
const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function App() {
  const [ results, setResults ] = useState([business, business, business, business, business, business]);

  return (
    <div>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar setResults={setResults} />
        <BusinessList results={results} />
      </main>
      <footer>
          Created by <a href="https://github.com/gracekishino" target="blank">Grace Kishino</a>
      </footer>
    </div>

  );
}

export default App;
