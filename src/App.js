import { useState } from 'react';
import './App.css';
import CaroselCards from './Components/CaroselCards';

function App() {
  const Swiggy = [
    { hotel_Name: "vasant Bhavan", cuisine: "Indian", rating: 4, distance: 4 },
    { hotel_Name: "A2B", cuisine: "Indian", rating: 3, distance: 3 },
    { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: 4, distance: 4 },
    { hotel_Name: "Dominos", cuisine: "American", rating: 4, distance: 3 },
    { hotel_Name: "Taco bell", cuisine: "Mexican", rating: 3, distance: 14 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },
    { hotel_Name: "KFC", cuisine: "American", rating: 2, distance: 24 },

  ]

  const [Data, setData] = useState(Swiggy)



  return (
    <div className='mainContainer' >
      <h1>Hotels near you</h1>
      <div className='CaroselContainer'>
        {Data.map(d => (
          <CaroselCards name={d.hotel_Name} cusinie={d.cuisine} rating={d.rating} />
        ))}
      </div>
    </div>
  );
}

export default App;
