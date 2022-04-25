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
  const [AllData, setAllData] = useState(Swiggy)

  const handleFilter = (filterValue) => {
    const value = [...Swiggy];
    if (filterValue === "all") {
      setData(AllData)
      return
    }
    const filtering = value.filter(f => f.cuisine === filterValue)
    setData(filtering)

  }

  const handleSort = (distance) => {
    const distanceValue = [...Swiggy]
    if (distance === "near") {
      const distanceNear = distanceValue.sort((a, b) => a.distance - a.distance)
      setData(distanceNear)
      return
    }
    const distanceFar = distanceValue.sort((a, b) => b.distance - a.distance)
    setData(distanceFar)

  }

  console.log("done")

  return (
    <div className='mainContainer' >
      <h1>Hotels near you</h1>
      <p>filters</p>
      <ul className='filterAndSortContainer' >
        <li onClick={() => handleFilter("all")} >all</li>
        <li onClick={() => handleFilter("Indian")} >Indian</li>
        <li onClick={() => handleFilter("Mexican")} >Mexican</li>
        <li onClick={() => handleFilter("American")} > American</li>
      </ul>

      <p>sort</p>
      <ul className='filterAndSortContainer' >
        <li onClick={() => handleSort("near")} >near to far</li>
        <li onClick={() => handleSort("far")} >far to near</li>
      </ul>
      <div className='CaroselContainer' >
        {Data.map(d => (
          <CaroselCards name={d.hotel_Name} cusinie={d.cuisine} rating={d.rating} />
        ))}
      </div>
    </div>
  );
}

export default App;
