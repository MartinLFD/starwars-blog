import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { Link } from "react-router-dom";
import "./Vehicle.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Vehicles() {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchVehicles();
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
        <div className="vehicle-carousel">

            <Slider {...settings}>
                {store.vehicles && store.vehicles.length > 0 ? (
                    store.vehicles.map((vehicle, index) => {
                        const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`;

                        return (
                        <div key={index} className="vehicle-card">

                            <img src= {imageUrl} alt={vehicle.name} className="vehicle-image" />
                            <h3>{vehicle.name}</h3>
                            <Link to={`/vehicle/${vehicle.uid}`}>
                                Ver Más
                            </Link>
                            <button
                                onClick={() => actions.addToFavorites(vehicle)}
                                className="add-to-favorites-btn"
                            >
                                Añadir a Favoritos
                            </button>
                        </div>
                        )
                    })
                ) : (
                    <p>Cargando personajes...</p>
                )}
            </Slider>
        </div>
    );


}
