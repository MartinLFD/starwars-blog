// PlanetDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";


export function PlanetDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchPlanetDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const planets = store.planetDetails;

  return (
    <div className="planet-detail-card">
      {planets ? (
        <div>
          <h2>{planets.properties.name}</h2>
          <p><strong>diameter:</strong> {planets.properties.diameter}</p>
          <p><strong>rotation period:</strong> {planets.properties.rotation_period}</p>
          <p><strong>orbital period:</strong> {planets.properties.orbital_period}</p>
          <p><strong>gravity:</strong> {planets.properties.gravity}</p>
          <p><strong>population:</strong> {planets.properties.population}</p>
          <p><strong>climate:</strong> {planets.properties.climate}</p>
          <p><strong>terrain:</strong> {planets.properties.terrain}</p>
          <p><strong>surface_water:</strong> {planets.properties.surface_water}</p>
          <p><strong>Created:</strong> {new Date(planets.properties.created).toLocaleDateString()}</p>
          <p><strong>Edited:</strong> {new Date(planets.properties.edited).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}


