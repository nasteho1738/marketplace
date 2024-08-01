import React from 'react';

function AdvertisementCard({ advertisement }) {
  const cardStyle = {
    fontFamily: 'Times New Roman, Times, serif'
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 d-flex flex-column" style={cardStyle}>
        <img src={advertisement.image} className="card-img-top" alt={advertisement.title} />
        <div className="card-body d-flex flex-column" style={cardStyle}>
          <h5 className="card-title">{advertisement.title}</h5>
          <p className="card-text flex-grow-1">{advertisement.description}</p>
          <a href="#" className="btn btn-primary mt-auto">View Details</a>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementCard;



