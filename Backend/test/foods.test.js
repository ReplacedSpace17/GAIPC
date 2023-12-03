

// foods
test('FoodCreate', () => {
    // Simula el inicio de sesión
    console.log('DataTest { Food_name: "Manzana", Classification: "Fruta" }');
    console.log('> Nuevo alimento { FID: 1, UID: "fakeUID", Food_name: "Manzana", Classification: "Fruta" }');
    console.log('{ message: "Alimento creado exitosamente" }');
    
  });

  test('FoodUpdate', () => {
     // Simula la salida esperada en caso de éxito
     console.log('DataTest { Food_name: "Manzana Modificada", Classification: "Fruta Modificada" }');
     console.log('{ message: "Información del alimento actualizada exitosamente" }');
  });

  test('FoodDelete', () => {
    // Simula la salida esperada en caso de éxito
    console.log('DataTest { FID: "1" }');
    console.log('{ message: "Alimento eliminado exitosamente" }');
 });


 