import React from 'react';
import AdvertisementCard from './AdvertisementCard';

function AdvertisementList({ advertisements }) {
  return (
    <div className="row">
      {advertisements.map(ad => (
        <AdvertisementCard key={ad.id} advertisement={ad} />
      ))}
    </div>
  );
}

export default AdvertisementList;

