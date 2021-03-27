import SearchHero from '../components/SearchHero';
import { SearchResults } from "../components/Results";
import React, { useState } from "react";
import API from "../utils/API";


function Search() {
    // Setting our component's initial state
    const [query, setQuery] = useState("");
    const [searchBooks, setBooks] = useState([]);

    // call google books api with 'search' as parameter
    async function handleFormSubmit(event) {
        event.preventDefault();
        const results = await API.searchBook(query); 
        setBooks(results.data.items);
    }

    console.log(searchBooks);

    return(
        <div>
            <SearchHero
                query={query}
                setQuery={setQuery}
                handleFormSubmit={handleFormSubmit}
            />
            {
                searchBooks.map(searchBook => (
                    <SearchResults
                    key = {searchBook.id}
                    title = {searchBook.volumeInfo.title}
                    authors = {searchBook.volumeInfo.authors}
                    description = {searchBook.volumeInfo.description}
                    image = {searchBook.volumeInfo.imageLinks.thumbnail}
                    href = {searchBook.volumeInfo.infoLink}
                    />
                ))
            }
        </div>
    )
}

export default Search;