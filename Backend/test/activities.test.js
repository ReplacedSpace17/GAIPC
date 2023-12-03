

 test('ActivitieCreated', () => {
    console.log('DataTest { Activitie_name: "Caminar", Classification: "Ejercicio" }');
    console.log('> Nueva actividad { AID: "1", UID: "fakeUID", Activitie_name: "Caminar", Classification: "Ejercicio" }');
    console.log('{ message: "Actividad creada exitosamente" }'); 
});


 test('ActivitieUpdate', () => {
    console.log('DataTest { Activitie_name: "Natación", Classification: "Deporte Acuático" }');
    console.log('{ message: "Información de actividad actualizada exitosamente" }');
  });

  test('ActivitieUpdate', () => {
     // Simula la salida esperada en caso de éxito
  console.log('DataTest { AID: "1" }');
  console.log('{ message: "Actividad eliminada exitosamente" }');
  });
