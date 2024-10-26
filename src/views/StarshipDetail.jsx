// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";


export function StarshipDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchStarshipDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const starship = store.starshipDetails;

  return (
    <div className="character-detail-card">
      {starship ? (
        <div>
          <h2>{starship.properties.name}</h2>
          <p><strong>Height:</strong> {starship.properties.model}</p>
          <p><strong>Mass:</strong> {starship.properties.starship_class}</p>
          <p><strong>manufacturer:</strong> {starship.properties.manufacturer}</p>
          <p><strong>cost in credits:</strong> {starship.properties.cost_in_credits}</p>
          <p><strong>length:</strong> {starship.properties.length}</p>
          <p><strong>crew:</strong> {starship.properties.crew}</p>
          <p><strong>passengers:</strong> {starship.properties.passengers}</p>
          <p><strong>max atmosphergin speed:</strong> {starship.properties.max_atmosphering_speed}</p>
          <p><strong>hyperdrive rating</strong> {starship.properties.hyperdrive_rating}</p>
          <p><strong>Created:</strong> {new Date(starship.properties.created).toLocaleDateString()}</p>
          <p><strong>Edited:</strong> {new Date(starship.properties.edited).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}


