const PlaceCard = ({ place }) => {
    return (
      <div className="place-card">
        <h3>{place.name}</h3>
        <p><strong>Location:</strong> {place.location}</p>
        <p><strong>Reason:</strong> {place.reason}</p>
        <p><strong>Visited:</strong> {place.visited ? 'Yes' : 'No'}</p>
      </div>
    );
  };
  
  export default PlaceCard;