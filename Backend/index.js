const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
// Enable CORS for all routes
app.use(cors());

// Configurar bodyParser para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//IMPORTS
const {  AddParticipante, getParticipantes, deleteParticipante, 
  updateParticipante, addConferencia, addAsistente, getAsistentes, getConferencias} = require('./Functions/Functions');



//-------------------------------------END POINTS----------------------------


// Endpoint para agregar un participante
app.post('/api/Module1/Participante/Insert', async (req, res) => {
  const formData = req.body;
  AddParticipante(req, res, formData);
});

// Endpoint para obtener todos los participantes
app.get('/api/Module1/Participante/GetAll', getParticipantes);

// Endpoint para eliminar un participante por ID
app.delete('/api/Module1/Participante/Delete/:id', deleteParticipante);

// Endpoint para actualizar un participante por ID
app.put('/api/Module1/Participante/Update/:id', async (req, res) => {
  const formData = req.body;
  updateParticipante(req, res, formData, req.params.id);
});

// Endpoint para agregar una conferencia
app.post('/api/Module1/Conferencia/Insert', async (req, res) => {
  const formData = req.body;
  addConferencia(req, res, formData);
});

app.get('/api/Module1/Conferencia/GetAll', getConferencias);

// Endpoint para agregar un asistente
app.post('/api/Module1/Asistente/Insert', async (req, res) => {
  const formData = req.body;
  addAsistente(req, res, formData);
});

// Endpoint para obtener asistentes por ID de conferencia
app.get('/api/Module1/Asistente/GetByConference/:id', getAsistentes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Obtener info del usuario
app.post('/test', async (req, res) => {
  const formData = req.body; // Datos de la nueva actividad
  console.log("Entro");
  console.log(formData);
  //test(req, res);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});
