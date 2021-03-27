import SearchHero from '../components/SearchHero';
import Results from "../components/Results";
import React, { useState, useEffect } from "react";
import API from "../utils/API";


function Search() {
    // Setting our component's initial state
    const [query, setQuery] = useState("");
    const [searchBooks, setBooks] = useState([]);

    // call google books api with 'search' as parameter
    async function handleFormSubmit(event) {
        event.preventDefault();
        const results = await API.searchBook; 
        setBooks(results.data);
    }

    console.log(searchBooks);

    return(
        <div>
            <SearchHero
                query={query}
                setQuery={setQuery}
                handleFormSubmit={handleFormSubmit}
            />
            <Results/>
        </div>
    )
}

export default Search;