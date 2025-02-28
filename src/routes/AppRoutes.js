import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import OurStory from '../pages/OurStory/OurStory';
import Shop from '../pages/Shop/Shop';
import Men from '../pages/Men/Men';
import Women from '../pages/Women/Woman';
import Kids from '../pages/Kids/Kids';

const AppRoutes = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/contactUs" element={<Home />} />
      <Route path="/ourstory" element={<OurStory />} />
      
    </Routes>
  )
}

export default AppRoutes;