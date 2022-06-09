import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SortedBedrooms from './components/sorting/sortedBedrooms';
import Homepage from './pages/Homepage';

import Propertydetails from "./pages/Propertydetails";

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
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/sortedBedrooms" element={<SortedBedrooms houses={houses}/>} />
            <Route path="/Propertydetails" element={<Propertydetails></Propertydetails>}></Route>
          </Routes>
        </Router>  
      </>
  );
}

export default App;
