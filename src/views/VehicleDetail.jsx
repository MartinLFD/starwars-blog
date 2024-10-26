// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams } from "react-router-dom";


export function VehicleDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchVehicleDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const vehicle = store.vehicleDetails;

  return (
    <div className="vehicle-detail-card">
      {vehicle ? (
        <div>
          <h2>{vehicle.properties.name}</h2>
          <p><strong>model:</strong> {vehicle.properties.model}</p>
          <p><strong>vehicle class:</strong> {vehicle.properties.vehicle_class}</p>
          <p><strong>Hair Color:</strong> {vehicle.properties.manufacturer}</p>
          <p><strong>Skin Color:</strong> {vehicle.properties.cost_in_credits}</p>
          <p><strong>Eye Color:</strong> {vehicle.properties.length}</p>
          <p><strong>Birth Year:</strong> {vehicle.properties.crew}</p>
          <p><strong>Gender:</strong> {vehicle.properties.passengers}</p>
          <p><strong>max atmosphergin speed:</strong> {vehicle.properties.max_atmosphering_speed}</p>
          <p><strong>hyperdrive rating</strong> {vehicle.properties.hyperdrive_rating}</p>
          <p><strong>Created:</strong> {new Date(vehicle.properties.created).toLocaleDateString()}</p>
          <p><strong>Edited:</strong> {new Date(vehicle.properties.edited).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}


