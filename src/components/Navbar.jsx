import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";
import "./Navbar.css";

export function Navbar() {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">StarWars</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            {/* Bandeja de Favoritos */}
            <div className="favorites-dropdown">
              <button className="favorites-btn">Favoritos ({store.favorites.length})</button>
              <div className="favorites-menu">
                {store.favorites.length > 0 ? (
                  store.favorites.map((fav, index) => (
                    <div key={index} className="favorite-item">
                      <Link to={`/${fav.type}/${fav.uid}`}>
                        {fav.name}
                      </Link>
                      <button 
                        onClick={() => actions.removeFromFavorites(fav.uid)} 
                        className="remove-favorite-btn"
                      >
                        &times;
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="no-favorites">No hay favoritos</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
