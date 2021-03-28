// eslint-disable-next-line
import React from "react";
import "./style.css";

export function SearchResults(props) {
  return(
    <div className="container">
      <div className="card">
 
        <div className="columns">
          <div className="column">
            <header className="card-header">
              <p className="book-title">
                {props.title}<br/> 
              </p>
            </header>
            <header className="card-header">
              <p className="book-author">
                Written by: {props.authors}
              </p>
            </header>

            {/* Nested Columns */}
            <div className="columns is-mobile">

              {/* First Nested Column */}
              <div className="column is-one-third">
                <div className="card-image">
                  <figure className="image">
                    <img src={props.image} alt="book-cover"></img>
                  </figure>
                </div>
              </div>

              {/* Second Nested Column */}
              <div className="column">
                <div className="card-content">
                  <div className="content">
                    {props.description}
                  </div>
                </div>
              </div>
              {/* Closing tag for nested columns */}
            </div>

            <div className="column">
              <footer className="card-footer">
                <div className="buttons has-addons">
                  <button className="button is-info is-light"><a href={props.href} rel="noreferrer" target="_blank">View</a></button>
                  <button id = {props.id} className="button is-danger is-light" onClick={props.handleSave}>Save</button>
                </div>
              </footer>
            </div>

          </div>
          {/* Closing tag for first column*/}
        </div>
      {/* Closing tag for first columns group*/}
      </div>
    {/* Closing tag for card */}
    </div>
  )
}

export function SavedResults(props) {
  return(
    <div className="container">
      <div className="card">
 
        <div className="columns">
          <div className="column">
            <header className="card-header">
              <p className="card-header-title">
                Title: {props.title}<br/>
                Written By: {props.authors}
              </p>
            </header>

            {/* Nested Columns */}
            <div className="columns is-mobile">

              {/* First Nested Column */}
              <div className="column is-one-third">
                <div className="card-image">
                  <figure className="image">
                    <img src={props.image} alt="book-cover"></img>
                  </figure>
                </div>
              </div>

              {/* Second Nested Column */}
              <div className="column">
                <div className="card-content">
                  <div className="content">
                    {props.description}
                  </div>
                </div>
              </div>
              {/* Closing tag for nested columns */}
            </div>

            <div className="column">
              <footer className="card-footer">
                <div className="buttons has-addons">
                  <button className="button"><a href={props.href}>View</a></button>
                  <button className="button" onClick={props.handleDelete}>Delete</button>
                </div>
              </footer>
            </div>

          </div>
          {/* Closing tag for first column*/}
        </div>
      {/* Closing tag for first columns group*/}
      </div>
    {/* Closing tag for card */}
    </div>
  )
}