import SavedHero from '../components/SavedHero';
import Results from "../components/Results";
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

    console.log(savedBooks);
    
    return(
        <div>
            <SavedHero/>
            <Results/>
        </div>
)
}

export default Saved;