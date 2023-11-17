// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/login'; // Importa tu componente de inicio de sesión
import Home from './Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
