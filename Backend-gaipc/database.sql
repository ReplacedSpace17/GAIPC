create database gaipc;

-- Crear la tabla 'usuarios' con ID autoincremental en PostgreSQL
CREATE TABLE usuarios (
  ID SERIAL PRIMARY KEY,
  Email varchar(255),
  Password varchar(255)
);

-- Insertar datos de usuarios (no incluyas el campo ID, ya que se autoincrementará)
INSERT INTO usuarios (Email, Password) VALUES
  ('admin@admin.com', 'admin'),
  ('usuario2@example.com', 'contraseña2');
