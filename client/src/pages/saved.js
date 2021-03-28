import SavedHero from '../components/SavedHero';
import { SavedResults } from "../components/Results";
import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Saved() {
    // Setting our component's initial state
    const [savedBooks, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
        .then(res => 
            setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

    const handleDelete = (event) => {
        event.preventDefault();
        API.deleteBook(event.target.id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
    }
    
    console.log(savedBooks);
    
    return(
        <div>
            <SavedHero/>
            <SavedResults
            id = {savedBooks.id}
            title = {savedBooks.volumeInfo.title}
            authors = {savedBooks.volumeInfo.authors}
            description = {savedBooks.volumeInfo.description}
            image = {savedBooks.volumeInfo.imageLinks.thumbnail}
            href = {savedBooks.volumeInfo.infoLink}
            handleDelete = {handleDelete}
            />
        </div>
)
}

export default Saved;