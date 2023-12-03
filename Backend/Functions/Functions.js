const connection = require('../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');




/////////////////////participantes
async function AddParticipante(req, res, formData) {
  try {
    const newParticipantes = {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      email: formData.email,
      username: formData.username,
      line: formData.line,
      avatar: formData.avatar,
    };

    const insertQuery = `
    INSERT INTO "participantes"("nombre", "apellido", "email", "username", "linea", "avatar")
    VALUES ($1, $2, $3, $4, $5, $6)
  `;
    const values = [
      newParticipantes.nombre, 
      newParticipantes.apellidos, 
      newParticipantes.email, 
      newParticipantes.username,
      newParticipantes.line,
      newParticipantes.avatar,];

    await connection.query(insertQuery, values);
    console.log('> Nuevo participante ('+newParticipantes.nombre+' -> '+ newParticipantes.line+' )');
    // Si llegamos a este punto, la inserción fue exitosa
    res.status(200).json({ message: 'Creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el alimento:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Obtener participantes
async function getParticipantes(req, res) {
  try {
    const result = await connection.query('SELECT * FROM "participantes"');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los participantes:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Eliminar participante por ID
async function deleteParticipante(req, res) {
  try {
    const id = req.params.id;
    await connection.query('DELETE FROM "participantes" WHERE "pid" = $1', [id]);
    res.status(200).json({ message: 'Eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el participante:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Actualizar participante por ID
async function updateParticipante(req, res, formData, pid) {
  try {
    const id = pid;
    const { nombre, apellidos, email, username, line, avatar } = formData;
    const updateQuery = `
      UPDATE "participantes"
      SET "nombre" = $1, "apellido" = $2, "email" = $3, "username" = $4, "linea" = $5, "avatar" = $6
      WHERE "pid" = $7
    `;
    const values = [nombre, apellidos, email, username, line, avatar, id];
    await connection.query(updateQuery, values);
    res.status(200).json({ message: 'Actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el participante:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Para la tabla "conferencias"
async function addConferencia(req, res, formData) {
  try {
    const { conferencia, ponente } = formData;
    const insertQuery = `
      INSERT INTO "conferencias"("conferencia", "ponente")
      VALUES ($1, $2)
    `;
    await connection.query(insertQuery, [conferencia, ponente]);
    res.status(200).json({ message: 'Conferencia creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la conferencia:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Para la tabla "asistente"
async function addAsistente(req, res, formData) {
  try {
    conferencia_id =formData.cid;
    nombre_id = formData.pid;
    const insertQuery = `
      INSERT INTO "asistente"("conferencia_id", "nombre_id")
      VALUES ($1, $2)
    `;
    await connection.query(insertQuery, [conferencia_id, nombre_id]);
    res.status(200).json({ message: 'Asistente creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el asistente:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Obtener asistentes por ID de conferencia
async function getAsistentes(req, res) {
  try {
    const conferencia_id = req.params.id;
    const selectQuery = `
      SELECT a.aid, c.conferencia, p.nombre, p.avatar
      FROM "asistente" a
      JOIN "conferencias" c ON a.conferencia_id = c.cif
      JOIN "participantes" p ON a.nombre_id = p.pid
      WHERE a.conferencia_id = $1
    `;
    const result = await connection.query(selectQuery, [conferencia_id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener los asistentes:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

// Obtener conferencias
async function getConferencias(req, res) {
  try {
    const selectQuery = `
      SELECT *
      FROM "conferencias"
    `;
    const result = await connection.query(selectQuery);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al obtener las conferencias:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}

module.exports = {
  AddParticipante,
  getParticipantes,
  deleteParticipante,
  updateParticipante,
  addConferencia,
  addAsistente,
  getAsistentes,
  getConferencias
}


module.exports = {
  AddParticipante, getParticipantes, deleteParticipante, updateParticipante, addConferencia, addAsistente, getAsistentes, getConferencias
}


