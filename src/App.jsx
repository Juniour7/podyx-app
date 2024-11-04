import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//components
import DashBoardLayout from './Layout/DashBoardLayout';

//Pages
import DashboardHome from './Pages/DashboardHome';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<DashBoardLayout />}>
            <Route path='/dashboard' element={<DashboardHome />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
