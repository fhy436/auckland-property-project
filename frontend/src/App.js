import './App.css';
import { Route, Router, Routes,  } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SortedBedrooms from './components/sorting/sortedBedrooms';
import Homepage from './pages/Homepage';

function App() {

  const [houses, setHouses] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/houses')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response
      }) 
      .then(data => {
        setHouses(data);
        console.log(data);
      })
      .catch(error => console.log(error)); 
  }, []);

  return (
      <>
      <Homepage/>
        {/*
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/quicksort" element={<SortedBedrooms houses={houses} />} />
          </Routes>
        </Router>
        */}
        
      </>
  )
}

export default App;
