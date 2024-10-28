// CharacterDetail.js
import React, { useEffect, useContext } from "react";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";
import "./Vehicle.css"


export function VehicleDetail() {
  const { store, actions } = useContext(Context);
  const { uid } = useParams(); // Cambiado a uid

  useEffect(() => {
    actions.fetchVehicleDetails(uid); // Llama a la acción con el uid
  }, [uid]);

  const vehicle = store.vehicleDetails;
  const imageUrl = vehicle ? `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg` : "" ;
  return (
    <div className="vehicle-detail-container">
  {vehicle ? (
    <div className="vehicle-detail-content">
      {/* Sección izquierda: imagen y nombre */}
      <div className="vehicle-detail-left">
        <img src={imageUrl} alt={vehicle.properties.name} className="image-detail-vehicle" />
        <h2 className="vehicle-detail-name">{vehicle.properties.name}</h2>
      </div>

      {/* Sección derecha: detalles del vehículo */}
      <div className="vehicle-detail-right">
        <p><strong>Model:</strong> {vehicle.properties.model}</p>
        <p><strong>Vehicle Class:</strong> {vehicle.properties.vehicle_class}</p>
        <p><strong>Manufacturer:</strong> {vehicle.properties.manufacturer}</p>
        <p><strong>Cost in Credits:</strong> {vehicle.properties.cost_in_credits}</p>
        <p><strong>Length:</strong> {vehicle.properties.length}</p>
        <p><strong>Crew:</strong> {vehicle.properties.crew}</p>
        <p><strong>Passengers:</strong> {vehicle.properties.passengers}</p>
        <p><strong>Max Atmosphering Speed:</strong> {vehicle.properties.max_atmosphering_speed}</p>
        <p><strong>Hyperdrive Rating:</strong> {vehicle.properties.hyperdrive_rating}</p>
        <p><strong>Created:</strong> {new Date(vehicle.properties.created).toLocaleDateString()}</p>
        <p><strong>Edited:</strong> {new Date(vehicle.properties.edited).toLocaleDateString()}</p>
      </div>
    </div>
  ) : (
    <p>Cargando detalles...</p>
  )}
</div>
  );
}


