import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Exploreby from './components/Exploreby';
import { Route, Routes } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Cuisine from './components/Cuisine';
import RestaurantMenu from './components/RestaurantMenu';
import BugReportForm from './components/BugReportForm'; // Import BugReportForm
import CuisineRestaurants from './components/CuisineRestaurants';
import CuisineMenu from './components/CuisineMenu';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/explore" element={<Exploreby />} />
        <Route path="/restaurant" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="/cus" element={<Cuisine />} />
        <Route path="/navigate" element={<div>Navigate Page</div>} /> {/* Add Navigate Page */}
        <Route path="/report-bugs" element={<BugReportForm />} /> {/* Add Bug Report Page */}
        <Route path="/restaurants/:cuisineName" element={<CuisineRestaurants />} />
        <Route path="/restaurant/:restaurantId/menu/:cuisineName" element={<CuisineMenu />} />
      </Routes>
    </>
  );
}

export default App;
