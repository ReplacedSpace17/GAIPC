// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Participantes from './participantes/Participantes.jsx';
import FormAddParticipante from './participantes/formParticipanteAdd.jsx';
import FormEditParticipante from './participantes/edit.jsx';
import Registros from './registro/registro.jsx';
import AddRegistro from './registro/addRegistro.jsx';
import ViewConferencia from './registro/viewRegistro.jsx';
import CardAsistente from './registro/cardAsistente.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Participantes" element={<Participantes />} />
        <Route path="/FormAddParticipante" element={<FormAddParticipante />} />
        <Route path="/FormEditParticipante" element={<FormEditParticipante />} />
        <Route path="/Registros" element={<Registros />} />
        <Route path="/AddRegistro" element={<AddRegistro />} />
        <Route path="/ViewConferencia" element={<ViewConferencia />} /> 
        <Route path="/CardAsistente" element={<CardAsistente />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
