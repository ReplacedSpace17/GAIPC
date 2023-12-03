CREATE DATABASE conferencias;

CREATE TABLE "participantes" (
  "pid" serial PRIMARY KEY,
  "nombre" VARCHAR(255),
  "apellido" VARCHAR(255),
  "email" VARCHAR(255),
  "username" VARCHAR(255),
  "linea" VARCHAR(255),
  "avatar" VARCHAR(255)
);

CREATE TABLE "conferencias" (
  "cif" serial PRIMARY KEY,
 "conferencia" VARCHAR(255),
 "ponente" VARCHAR(255),
 "hora" VARCHAR(255)
);

CREATE TABLE "asistente" (
  "aid" serial PRIMARY KEY,
 "conferencia_id" int,
 "nombre_id" int
);






/*
user: admin@admin.com
pass:  Javier12345


token UID: 
e7786597-f773-4494-926e-f9e87332105a


//////////////////////////////////////////////////////////SEED DATA
INSERT INTO conferencias (conferencia, ponente, hora) VALUES 
('Bioestadística en la investigación médica', 'Dr. Juan Perez', '10:00 - 11:30AM'),
('Introducción a la bioestadística', 'Dra. Maria Lopez', '11:45 - 1:15PM'),
('Bioestadística y genómica', 'Dr. Carlos Sanchez', '1:30 - 3:00PM'),
('Aplicaciones de la bioestadística en la epidemiología', 'Dra. Ana Torres', '3:15 - 4:45PM'),
('Bioestadística para la biología molecular', 'Dr. Pedro Jimenez', '5:00 - 6:30PM'),
('Sismología y terremotos', 'Dr. Luis Rodriguez', '6:45 - 8:15PM'),
('Introducción a la sismología', 'Dra. Carmen Morales', '8:30 - 10:00PM'),
('Sismología y estructura de la Tierra', 'Dr. Manuel Gomez', '10:15 - 11:45PM'),
('Sismología para la prevención de desastres', 'Dra. Laura Ramirez', '12:00 - 1:30AM'),
('Sismología y geología', 'Dr. Jose Hernandez', '1:45 - 3:15AM');

*/

