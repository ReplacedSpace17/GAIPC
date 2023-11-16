import random

class BallenaJorobada:
    def __init__(self, edad):
        self.edad = edad

def generar_poblacion_inicial(tamano_poblacion):
    return [BallenaJorobada(edad=random.randint(0, 5)) for _ in range(tamano_poblacion)]

def tasa_reproduccion(edad, factor_alimento, factor_temperatura, factor_contaminacion):
    tasa_base = 0.05  # Tasa base de reproducción

    # Ajustar la tasa de reproducción según la edad y los factores ambientales
    if 0 <= edad < 3:
        tasa = tasa_base * 1.2 * factor_alimento * factor_temperatura * (1 - factor_contaminacion)
    elif 3 <= edad < 8:
        tasa = tasa_base * 1.5 * factor_alimento * factor_temperatura * (1 - factor_contaminacion)
    else:
        tasa = tasa_base * 0.8 * factor_alimento * factor_temperatura * (1 - factor_contaminacion)

    # Asegurarse de que la tasa esté en el rango [0, 1]
    return min(max(tasa, 0), 1)

def tasa_supervivencia(edad):
    # Ajustar la tasa de supervivencia según la edad
    if 0 <= edad < 10:
        return 0.9
    else:
        return 0.7

def calcular_factor_alimento():
    # Simular la variabilidad en la disponibilidad de alimentos
    return random.uniform(0.8, 1.2)

def calcular_factor_temperatura():
    # Simular la variabilidad en la temperatura
    return random.uniform(0.9, 1.1)

def calcular_factor_contaminacion():
    # Simular la variabilidad en la contaminación del agua
    return random.uniform(0, 0.2)

def ejecutar_modelo(configuracion):
    poblacion = generar_poblacion_inicial(configuracion["poblacion"])
    historial_poblacion = []

    for generacion in range(configuracion["num_generaciones"]):
        factor_alimento = calcular_factor_alimento()
        factor_temperatura = calcular_factor_temperatura()
        factor_contaminacion = calcular_factor_contaminacion()
        
        nueva_poblacion = []

        for ballena in poblacion:
            # Aplicar la tasa de supervivencia
            if random.random() < tasa_supervivencia(ballena.edad):
                nueva_poblacion.append(ballena)

            # Aplicar la tasa de reproducción con los factores ambientales
            if random.random() < tasa_reproduccion(ballena.edad, factor_alimento, factor_temperatura, factor_contaminacion):
                nueva_poblacion.append(BallenaJorobada(edad=0))  # Nueva cría

        poblacion = nueva_poblacion
        historial_poblacion.append(len(poblacion))

    resultados = [{"generacion": i, "tiempo": i * configuracion["intervalo_generacional"], "cantidad": cantidad} 
                  for i, cantidad in enumerate(historial_poblacion)]

    return resultados

# Configuración manual con factores adicionales
configuracion_manual = {
    "poblacion": 100,
    "num_generaciones": 20,
    "intervalo_generacional": 5,  # Tiempo en años entre generaciones
    "factor_alimento": 1.0,
    "factor_temperatura": 1.0,
    "factor_contaminacion": 1.0,
    "factor_alimento": 1.0,
    "factor_migracion": 1.0
    
}

# Ejecutar el modelo con la configuración manual
resultados = ejecutar_modelo(configuracion_manual)

# Imprimir los resultados
print(resultados)
