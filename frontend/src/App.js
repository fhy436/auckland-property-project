import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ScrollToTop from './functions/ScrollToTop';
import {data} from './databasedata';

import SortedBedrooms from './components/sorting/sortedBedrooms';
import Homepage from './pages/Homepage/Homepage';
import Propertydetails from './pages/PropertyDetailsPage/Propertydetails';
import Searchpage from './pages/SearchPage/Searchpage';
import BookingConfirm from './pages/Bookconfirmpage/BookingConfirm';

function App() {
  const houses = data;
  /*
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
  */

  return (
      <>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/sortedBedrooms" element={<SortedBedrooms houses={houses}/>} />
            <Route path="/Searchpage" element={<Searchpage houses={houses}/>} />
            <Route path="/Propertydetails" element={<Propertydetails></Propertydetails>}></Route>
            <Route path="/BookingConfirm" element={<BookingConfirm></BookingConfirm>}></Route>
          </Routes>
        </Router>  
      </>
  );
}

export default App;
