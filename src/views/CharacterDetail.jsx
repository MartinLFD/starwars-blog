// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";


export function CharacterDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchCharacterDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const character = store.characterDetails;

  return (
    <div className="character-detail-card">
      {character ? (
        <div>
          <h2>{character.properties.name}</h2>
          <p><strong>Height:</strong> {character.properties.height}</p>
          <p><strong>Mass:</strong> {character.properties.mass}</p>
          <p><strong>Hair Color:</strong> {character.properties.hair_color}</p>
          <p><strong>Skin Color:</strong> {character.properties.skin_color}</p>
          <p><strong>Eye Color:</strong> {character.properties.eye_color}</p>
          <p><strong>Birth Year:</strong> {character.properties.birth_year}</p>
          <p><strong>Gender:</strong> {character.properties.gender}</p>
          <p><strong>Created:</strong> {new Date(character.properties.created).toLocaleDateString()}</p>
          <p><strong>Edited:</strong> {new Date(character.properties.edited).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}

export default CharacterDetail;
