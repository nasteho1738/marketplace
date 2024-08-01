import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdvertisementList from './AdvertisementList';
import FilterSort from './FilterSort';

function App() {
  const [advertisements] = useState([
    { id: 1, title: "Product 1", description: "CACTI AGAVE SPIKED SELTZER DOWN TO EARTH INGREDIENTS. OUT OF THIS WORLD FLAVOR. CACTI PINEAPPLE 7% ALC. VOL. 355 ML / 12 FL. OZ. HERSHEY'S STORE TSX", image: "/1.jpg" },
    { id: 2, title: "Product 2", description: "The image is an advertisement for Cacti Agave Spiked Seltzer in Times Square, New York City. The billboard features a large can of Cacti, with the brand's logo and slogan. Down to Earth Ingredients. Out of This World Flavor. Cacti. The billboard is lit up brightly, showcasing the vibrant colors of the Cacti branding. The surrounding cityscape is also illuminated, adding to the overall dynamic and bustling energy of Times Square", image: "/2.jpeg" },
    { id: 3, title: "Product 3", description: "The billboard also features three images of the Cacti product can. The dominant image features a pineapple can with the brand name and logo. The smaller images show two different color variants of the product.", image: "/3.jpg" },
    { id: 4, title: "Product 4", description: "Looking for the perfect billboard mock-up for your next advertising campaign? Look no further! Our free, high-resolution mock-ups offer a realistic and professional way to showcase your designs and attract new customers. Download now and start creating eye-catching billboards that will make your brand stand out from the crowd.", image: "/4.webp" },
    { id: 5, title: "Product 5", description: "Looking for a premium billboard mockup to showcase your latest design? Look no further! This free, high-quality building billboard mockup offers a realistic and eye-catching way to present your work. Perfect for showcasing your brand identity, advertising campaign, or promotional message.", image: "/5.jpg" },
    { id: 6, title: "Product 6", description: "Make your brand stand out! Our building billboard mock-ups are perfect for showcasing your designs in a realistic and eye-catching way. Get your message seen by millions with our high-quality, customizable templates.", image: "/6.jpg" }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const getFilteredAndSortedAds = () => {
    let result = advertisements.filter(ad =>
      ad.title.toLowerCase().includes(filterTitle.toLowerCase())
    );
    result.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    return result;
  };

  const filteredAds = getFilteredAndSortedAds();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Advertisement List</h2>
      <FilterSort
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <AdvertisementList advertisements={filteredAds} />
    </div>
  );
}
export default App;

