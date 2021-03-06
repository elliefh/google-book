import React from "react";
import "./style.css";

function SearchHero({query, setQuery, handleFormSubmit}) {
    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    return(
        <section className="hero is-small">
            <div className="hero-body has-text-centered">
                <p className="title">
                (React) Google Books Search
                </p>
                <p className="subtitle">
                Search books of interest!
                </p>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <input className="input is-rounded" 
                        value={query}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="e.g., Harry Potter">
                        </input>
                        <button className="button is-rounded is-info" type="submit" onClick={handleFormSubmit}>Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchHero;