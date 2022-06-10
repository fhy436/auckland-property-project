import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from './functions/ScrollToTop';
import Homepage from './pages/Homepage/Homepage';
import Propertydetails from './pages/PropertyDetailsPage/Propertydetails';
import Searchpage from './pages/SearchPage/Searchpage';

function App() {



  return (
      <>
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/Searchpage" element={<Searchpage/>} />
            <Route path="/Propertydetails" element={<Propertydetails></Propertydetails>}></Route>
          </Routes>
        </Router>  
      </>
  );
}

export default App;
