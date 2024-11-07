import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import DashBoardLayout from './Layout/DashBoardLayout';

//Pages
import Home from './Pages/Home';
import DashboardHome from './Pages/DashboardHome';
import Availability from './Pages/Availability';
import BaseServices from './Pages/BaseServices';
import AdditionalServices from './Pages/AdditionalServices';
import Setups from './Pages/Setups';
import Rooms from './Pages/Rooms';
import StudioSettings from './Pages/StudioSettings';
import TermsConditions from './Pages/TermsConditions';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<DashBoardLayout />}>
            <Route path='/dashboard' element={<DashboardHome />} />
            <Route path='/availability' element={<Availability />} />
            <Route path='/base-services' element={<BaseServices />} />
            <Route path='/additional-services' element={<AdditionalServices />} />
            <Route path='/setups' element={<Setups />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/studio-settings' element={<StudioSettings />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />


          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
