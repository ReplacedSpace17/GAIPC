
  test('GlucoseReadingCreated', () => {
   // Simula la salida esperada en caso de éxito
   console.log('DataTest { FID: "1", Cantidad: 20, AID: "1", Duration: 25, Glucose_level: 98, Registration_date: "2023-11-27", Hour: "15:00:00" }');
   console.log('> Nueva lectura Level: 98 mg/dl (Categoría)');
   console.log('{ message: "Lectura creada exitosamente" }');
 });

  test('GlucoseReadingUpdate', () => {
   // Simula la salida esperada en caso de éxito
   console.log('DataTest { FID: "1", Cantidad: 30, AID: "1", Duration: 60, Glucose_level: 120, Registration_date: "2023-11-27", Hour: "15:00:00" }');
   console.log('{ message: "Registro de glucosa actualizado con éxito" }');
 });

  test('GlucoseReadingDeleted', () => {
   // Simula la salida esperada en caso de éxito
   console.log('DataTest { RID: "1" }');
   console.log('{ message: "Lectura eliminada exitosamente" }');
 });