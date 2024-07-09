import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import DepartmentList from './components/DepartmentList';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/second" element={
        <>
          <SecondPage />
          <DepartmentList />
        </>
      } />
    </Routes>
  </Router>
);

export default App;
