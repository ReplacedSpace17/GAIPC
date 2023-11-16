from flask import Flask, request, jsonify
from flask_cors import CORS  # Agregamos la importación de la extensión CORS
#from Modelos.GeneticsAlgoritmics.dinamicaPoblacional import generar_poblacion_inicial, evaluar_aptitud, seleccionar_padres, cruzar, mutar


app = Flask(__name__)
CORS(app)  # Habilitamos CORS para toda la aplicación

@app.route('/')
def hello_world():
    return '¡Hola, mundo! Este es mi proyecto Flask.'

@app.route('/saludo/<nombre>')
def saludo_personalizado(nombre):
    return f'¡Hola, {nombre}!'

@app.route('/sumar', methods=['POST'])
def sumar_numeros():
    try:
        data = request.get_json()
        num1 = data['num1']
        num2 = data['num2']
        resultado = num1 + num2
        return jsonify({'resultado': resultado})
    except Exception as e:
        return jsonify({'error': str(e)}), 400






#Modelo de dinamica

@app.route('/dinamicaPoblacional', methods=['POST'])
def endpoint_ejecutar_modelo():
    #try:
    #   data = request.get_json()
    #    resultados = ejecutar_modelo(data)
    #    return jsonify(resultados)
    #except Exception as e:
    #    return jsonify({'error': str(e)}), 400
    return '¡Hola, mundo! Este es mi proyecto Flask.'


if __name__ == '__main__':
    app.run(debug=True)
