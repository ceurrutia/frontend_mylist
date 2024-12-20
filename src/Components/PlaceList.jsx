import { useEffect, useState } from 'react';
import api from '../Services/api';
import PlaceCard from './PlaceCard';

const PlaceList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await api.get('http://localhost:8080/api/v1/places'); 
        console.log('Fetched Places:', response.data); 
        setPlaces(response.data); 
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className="place-list">
   
      {places.length > 0 ? (
        places.map((place) => <PlaceCard key={place.id} place={place} />)
      ) : (
        <p>No places found.</p>
      )}
    </div>
  );
};

export default PlaceList;
