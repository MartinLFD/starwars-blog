

// flux.js
const getState = ({ getActions, getStore, setStore }) => {
    return {
      store: {
        characters: [],
        planets: [],
        vehicles: [],
        starships: [],
        characterDetails: null,
        planetDetails: null,
        vehicleDetails: null,
        starshipDetails: null,
        favorites: [],
      },
      actions: {
        // Llamada para obtener la lista de personajes
        fetchCharacters: async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
            setStore({ characters: data.results });
          } catch (error) {
            console.error("Error fetching characters:", error);
          }
        },
  
        // Llamada para obtener la lista de planetas
        fetchPlanets: async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/planets");
            const data = await response.json();
            setStore({ planets: data.results });
          } catch (error) {
            console.error("Error fetching planets:", error);
          }
        },
  
        // Llamada para obtener la lista de vehículos
        fetchVehicles: async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await response.json();
            setStore({ vehicles: data.results });
          } catch (error) {
            console.error("Error fetching vehicles:", error);
          }
        },
  
        // Llamada para obtener la lista de naves espaciales
        fetchStarships: async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/starships");
            const data = await response.json();
            setStore({ starships: data.results });
          } catch (error) {
            console.error("Error fetching starships:", error);
          }
        },
  
        // Llamada para obtener detalles específicos de un personaje por ID
        fetchCharacterDetails: async (id) => {
          try {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await response.json();
            setStore({ characterDetails: data.result });
          } catch (error) {
            console.error("Error fetching character details:", error);
          }
        },
  
        // Llamada para obtener detalles específicos de un planeta por ID
        fetchPlanetDetails: async (id) => {
          try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            const data = await response.json();
            setStore({ planetDetails: data.result });
          } catch (error) {
            console.error("Error fetching planet details:", error);
          }
        },
  
        // Llamada para obtener detalles específicos de un vehículo por ID
        fetchVehicleDetails: async (id) => {
          try {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
            const data = await response.json();
            setStore({ vehicleDetails: data.result });
          } catch (error) {
            console.error("Error fetching vehicle details:", error);
          }
        },
  
        // Llamada para obtener detalles específicos de una nave espacial por ID
        fetchStarshipDetails: async (id) => {
          try {
            const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
            const data = await response.json();
            setStore({ starshipDetails: data.result });
          } catch (error) {
            console.error("Error fetching starship details:", error);
          }
        },

        addToFavorites: (item) => {
          const store = getStore();
          const isFavorite = store.favorites.some(fav => fav.uid === item.uid);
  
          if (!isFavorite) {
            setStore({ favorites: [...store.favorites, item] });
          }
        },
  
        // Función para eliminar un elemento de favoritos
        removeFromFavorites: (uid) => {
          const store = getStore();
          const updatedFavorites = store.favorites.filter(fav => fav.uid !== uid);
          setStore({ favorites: updatedFavorites });
        },
      },
    };
  };
  
  export default getState;
  

