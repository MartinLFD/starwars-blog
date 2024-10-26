import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { Link } from "react-router-dom";
import "./Planet.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Planets() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPlanets();
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
  <div className="planets-carousel">
      
      <Slider {...settings}>
          {store.planets && store.planets.length > 0 ? (
              store.planets.map((planet, index) => (
                  <div key={index} className="planet-card">
                      <h3>{planet.name}</h3>
                      <Link to={`/planet/${planet.uid}`}>
                                Ver Más
                            </Link>
                  </div>
              ))
          ) : (
              <p>Cargando personajes...</p>
          )}
      </Slider>
  </div>
);
 
}
