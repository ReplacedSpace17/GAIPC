// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Participantes from './participantes/Participantes.jsx';
import FormAddParticipante from './participantes/formParticipanteAdd.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Participantes" element={<Participantes />} />
        <Route path="/FormAddParticipante" element={<FormAddParticipante />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
