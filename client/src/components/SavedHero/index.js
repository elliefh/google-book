import React from "react";
import BookGif from "../Assets/book.gif";
import "./style.css";

function SavedHero() {
    return(
        <section className="hero is-small">
            <div className="hero-body has-text-centered">
                <p className="title">
                (React) Google Books Search
                </p>
                <p className="subtitle">
                Your saved books
                </p>
                <img src={BookGif} alt="book-animation" className="bookgif"></img>
            </div>
        </section>
    )
}

export default SavedHero;