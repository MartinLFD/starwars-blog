import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { Link } from "react-router-dom";
import "./Character.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export function Characters() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
    }, []);



    // Configuración del carrusel
    const settings = {
        dots: true, // Muestra indicadores en la parte inferior
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Número de cartas visibles a la vez
        slidesToScroll: 1, // Número de cartas que se desplazan al hacer clic
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="character-carousel">
        <Slider {...settings}>
          {store.characters && store.characters.length > 0 ? (
            store.characters.map((character, index) => {
              // Definir imageUrl dentro de .map() para cada character
              const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`;
                
  
              return (
                <div key={index} className="character-card">
                  <img src={imageUrl} alt={character.name} className="character-image" />
                  <h3>{character.name}</h3>
                  <Link to={`/character/${character.uid}`} className="view-more-link">
                    Ver Más
                  </Link>
                  <button
                    onClick={() => actions.addToFavorites(character)}
                    className="add-to-favorites-btn"
                  >
                    Añadir a Favoritos
                  </button>
                </div>
              );
            })
          ) : (
            <p>Cargando personajes...</p>
          )}
        </Slider>
      </div>
    );
  }

