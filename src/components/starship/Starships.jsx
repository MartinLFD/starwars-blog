import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { Link } from "react-router-dom";
import "./Starship.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Starships() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchStarships();
    }, []);

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
        <div className="starship-carousel">

            <Slider {...settings}>
                {store.starships && store.starships.length > 0 ? (
                    store.starships.map((starship, index) => {
                        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`;


                        return (
                            <div key={index} className="starship-card">
                                <img src={imageUrl} alt={starship.name} className="starship-image" />
                                <h3>{starship.name}</h3>
                                <Link to={`/starship/${starship.uid}`}>
                                    Ver Más
                                </Link>
                                <button
                                    onClick={() => actions.addToFavorites(starship)}
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
