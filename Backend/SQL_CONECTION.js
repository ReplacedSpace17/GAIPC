const { Pool } = require('pg');


const connection = new Pool({
  user: 'postgres',
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  database: 'glucontroldb',
  password: 'root',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});


connection.connect((error, client, done) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos\n');
   // console.log('------------------🚀🖥️ BIENVENIDO AL BACKEND DE GLUCONTROL 🖥️🚀 --------------------\n');
    typeWelcomeMessage();
  }
});

const welcomeMessage = '------------------------ 🚀🖥️ BIENVENIDO AL BACKEND DE GLUCONTROL  🖥️🚀 ------------------------';
const loadingChars = '▉▊▋▌▍▎▏';
const delay = 50;

function typeWelcomeMessage() {
  let loadingIndex = 0;
  let currentIndex = 0;
  const loadingDuration = 2000; // Duración de la animación de carga en milisegundos

  const intervalId = setInterval(() => {
    const loadingChar = loadingChars[loadingIndex];
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Loading... ${loadingChar}`);
    loadingIndex = (loadingIndex + 1) % loadingChars.length;

    if (currentIndex === welcomeMessage.length) {
      clearInterval(intervalId);
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(welcomeMessage);
      process.stdout.write('\n');
    } else {
      process.stdout.write(welcomeMessage.slice(0, currentIndex));
      currentIndex++;
    }
  }, delay);

  setTimeout(() => {
    clearInterval(intervalId);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(welcomeMessage);
    process.stdout.write('\n');
  }, loadingDuration);
}



module.exports = connection;


/**
local conection

const connection = new Pool({
  user: 'postgres',
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  database: 'glucontroldb',
  password: 'root',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});


SERVER RENDEER CONECTION

const connection = new Pool({
  user: 'root',
  host: 'dpg-ckl0b1rj89us73bkl0kg-a.oregon-postgres.render.com',
  database: 'glucontroldb',
  password: 'LMHKruifzLnDDCvEFpnLRDuJL3b16nuW',
  port: 5432,
  ssl: true, // Habilita la conexión SSL
});


 */



