const {
  CreateFood, UpdateFoodInformation, DeleteFood, GetUserFoods,
  CreateActivity, GetActivitiesByUID, UpdateActivity, DeleteActivity,
  CreateGlucoseReading, GetGlucoseReadings, UpdateGlucoseReadingByNumber, DeleteGlucoseReading, getLatestGlucoseReading,
  GetMostRegisteredAID, GetMostRegisteredFID
} = require('../Module4/FunctionsModule4.js');

describe('Pruebas para FunctionsModule4', () => {
  // Prueba para CreateFood
  test('CreateFood debería crear un nuevo alimento', async () => {
    const req = {}; // Puedes ajustar según sea necesario
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const foodData = {
      Food_name: 'Manzana',
      Classification: 'Fruta'
    };
    const UID = 'fakeUID';
    await CreateFood(req, res, foodData, UID);
    // Verificar que se haya llamado res.status con el código 200
    expect(res.status).toHaveBeenCalledWith(200);
    // Verificar que se haya llamado res.json con el mensaje esperado
    expect(res.json).toHaveBeenCalledWith({ message: 'Alimento creado exitosamente' });
  });

//modify
test('UpdateFoodInformation debería actualizar la información de un alimento', async () => {
  const req = {}; // Puedes ajustar según sea necesario
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const updatedFoodData = {
    Food_name: 'Manzana Modificada',
    Classification: 'Fruta Modificada'
  };
  const FID = '1';

  await UpdateFoodInformation(req, res, FID, updatedFoodData);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);

  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Información del alimento actualizada exitosamente' });
});

//eliminar food
test('DeleteFood debería eliminar un alimento', async () => {
  const req = {}; 
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const FID = '1';

  await DeleteFood(req, res, FID);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ message: 'Alimento eliminado exitosamente' });
});


//activities
// Prueba para CreateActivity
test('CreateActivity debería crear una nueva actividad', async () => {
  const req = {}; 
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const actData = {
    Activitie_name: 'Caminar',
    Classification: 'Ejercicio'
  };

  await CreateActivity(req, res, actData, UID);
  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Actividad creada exitosamente' });
});

// Prueba para DeleteActivity
test('DeleteActivity debería eliminar una actividad', async () => {
  const AID = '1';
  await DeleteActivity(req, res, AID);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Actividad eliminada exitosamente' });
});

// Prueba para UpdateActivity
test('UpdateActivity debería actualizar la información de una actividad', async () => {
  const updatedData = {
    Activitie_name: 'Natación',
    Classification: 'Deporte Acuático',
  };
 const AID = '1';
  await UpdateActivity(req, res, AID, updatedData);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Información de actividad actualizada exitosamente' });
});

//readings



// Prueba para la creación de una lectura de glucosa
test('CreateGlucoseReading debería crear una nueva lectura de glucosa', async () => {
  const req = {}; // Puedes ajustar según sea necesario
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  const formData = {
    FID: '1',
    Cantidad: 20,
    AID: '1',
    Duration: 25,
    Glucose_level: 98,
    Registration_date: '2023-11-27',
    Hour: '15:00:00'
  };
  const UID = 'fakeUID';

  await CreateGlucoseReading(req, res, formData, UID);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Lectura creada exitosamente' });
});

// Prueba para la actualización de una lectura de glucosa
test('UpdateGlucoseReadingByNumber debería actualizar una lectura de glucosa existente', async () => {
  const req = {}; // Puedes ajustar según sea necesario
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
  };

  const updatedGlucoseReading = {
    FID: '1',
    Cantidad: 30,
    AID: '1',
    Duration: 60,
    Glucose_level: 120,
    Registration_date: '2023-11-27',
    Hour:  '15:00:00'
  };
  const RID = '1';

  await UpdateGlucoseReadingByNumber(req, res, RID, updatedGlucoseReading);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.send con el mensaje esperado
  expect(res.send).toHaveBeenCalledWith('Registro de glucosa actualizado con éxito');
});

// Prueba para la eliminación de una lectura de glucosa
test('DeleteGlucoseReading debería eliminar una lectura de glucosa existente', async () => {
  const req = {}; // Puedes ajustar según sea necesario
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };
  const RID = '1';

  await DeleteGlucoseReading(req, res, RID);

  // Verificar que se haya llamado res.status con el código 200
  expect(res.status).toHaveBeenCalledWith(200);
  // Verificar que se haya llamado res.json con el mensaje esperado
  expect(res.json).toHaveBeenCalledWith({ message: 'Lectura eliminado exitosamente' });
});
});
