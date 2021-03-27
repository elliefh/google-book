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
              <p className="card-header-title">
                {props.title}<br/> 
                Author(s): {props.authors}
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
                  <button className="button"><a href={props.href} target="_blank">View</a></button>
                  <button className="button">Save</button>
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
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="book-cover"></img>
                  </figure>
                </div>
              </div>

              {/* Second Nested Column */}
              <div className="column">
                <div className="card-content">
                  <div className="content">
                    {props.description}
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                  </div>
                </div>
              </div>
              {/* Closing tag for nested columns */}
            </div>

            <div className="column">
              <footer className="card-footer">
                <div className="buttons has-addons">
                  <button className="button is-info">View</button>
                  <button className="button is-dark">Delete</button>
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