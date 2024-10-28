// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";
import "./Starship.css"

export function StarshipDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchStarshipDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const starship = store.starshipDetails;
  const imageUrl = starship ? `https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg` : "";

  return (
    <div className="starship-detail-container">
      {starship ? (
        <div className="starship-detail-content">
          {/* Sección izquierda: imagen y nombre */}
          <div className="starship-detail-left">
            <img src={imageUrl} alt={starship.properties.name} className="image-detail-starship" />
            <h2 className="starship-detail-name">{starship.properties.name}</h2>
          </div>

          {/* Sección derecha: detalles del starship */}
          <div className="starship-detail-right">
            <p><strong>Model:</strong> {starship.properties.model}</p>
            <p><strong>Starship Class:</strong> {starship.properties.starship_class}</p>
            <p><strong>Manufacturer:</strong> {starship.properties.manufacturer}</p>
            <p><strong>Cost in Credits:</strong> {starship.properties.cost_in_credits}</p>
            <p><strong>Length:</strong> {starship.properties.length}</p>
            <p><strong>Crew:</strong> {starship.properties.crew}</p>
            <p><strong>Passengers:</strong> {starship.properties.passengers}</p>
            <p><strong>Max Atmosphering Speed:</strong> {starship.properties.max_atmosphering_speed}</p>
            <p><strong>Hyperdrive Rating:</strong> {starship.properties.hyperdrive_rating}</p>
            <p><strong>Created:</strong> {new Date(starship.properties.created).toLocaleDateString()}</p>
            <p><strong>Edited:</strong> {new Date(starship.properties.edited).toLocaleDateString()}</p>
          </div>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>

  );
}


