// PlanetDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";
import "./Planetdetail.css"


export function PlanetDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchPlanetDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const planets = store.planetDetails;
  const imageUrl = planets ? `https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg` : "" ;

  return (
    <div className="planets-detail-container">
    {planets ? (
      <div className="planets-detail-content">
        {/* Sección izquierda: imagen y nombre */}
        <div className="planets-detail-left">
          <img src={imageUrl} alt={planets.properties.name} className="image-detail-planets" />
          <h2 className="planets-detail-name">{planets.properties.name}</h2>
        </div>

        {/* Sección derecha: detalles del planetsa */}
        <div className="planets-detail-right">
          <p><strong>Diameter:</strong> {planets.properties.diameter}</p>
          <p><strong>Rotation Period:</strong> {planets.properties.rotation_period}</p>
          <p><strong>Orbital Period:</strong> {planets.properties.orbital_period}</p>
          <p><strong>Gravity:</strong> {planets.properties.gravity}</p>
          <p><strong>Population:</strong> {planets.properties.population}</p>
          <p><strong>Climate:</strong> {planets.properties.climate}</p>
          <p><strong>Terrain:</strong> {planets.properties.terrain}</p>
          <p><strong>Surface Water:</strong> {planets.properties.surface_water}</p>
          <p><strong>Created:</strong> {new Date(planets.properties.created).toLocaleDateString()}</p>
          <p><strong>Edited:</strong> {new Date(planets.properties.edited).toLocaleDateString()}</p>
        </div>
      </div>
    ) : (
      <p>Cargando detalles...</p>
    )}
  </div>
);
}


