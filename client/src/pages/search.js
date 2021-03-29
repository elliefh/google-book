import SearchHero from '../components/SearchHero';
import { SearchResults } from "../components/Results";
import React, { useState } from "react";
import API from "../utils/API";

function Search() {
    // Setting our component's initial state
    const [query, setQuery] = useState("");
    const [searchBooks, setBooks] = useState([]);
    // const [savedBooks, setSavedBooks] = useState([]);

    // call google books api with 'search' as parameter
    async function handleFormSubmit(event) {
        event.preventDefault();
        const results = await API.searchBook(query); 
        setBooks(results.data.items);
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log("Selected Book ID: " + event.target.id);
        let selectedBook = searchBooks.filter(book => book.id === event.target.id);
        console.log(selectedBook[0]);
        API.saveBook({
            id: event.target.id,
            title: selectedBook[0].volumeInfo.title,
            authors: selectedBook[0].volumeInfo.authors,
            description: selectedBook[0].volumeInfo.description,
            image: selectedBook[0].volumeInfo.imageLinks.thumbnail,
            href: selectedBook[0].volumeInfo.infoLink,
            saved: true
        })
            .then(success => console.log("You saved the following Book: " + selectedBook[0].volumeInfo.title))
            .catch(err => console.log(err))
      }

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
                    id = {searchBook.id}
                    title = {searchBook.volumeInfo.title}
                    authors = {searchBook.volumeInfo.authors}
                    description = {searchBook.volumeInfo.description}
                    image = {searchBook.volumeInfo.imageLinks.thumbnail}
                    href = {searchBook.volumeInfo.infoLink}
                    handleSave = {handleSave}
                    />
                ))
            }
        </div>
    )
}

export default Search;