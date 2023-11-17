from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/gaipc'
db = SQLAlchemy(app)

##-----------------------------------------------------------------Models
class usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)



#-----------------------------------------------------------------Endpoints
@app.route('/')
def hello_world():
    return '¡Hola, mundo! Este es mi proyecto Flask.'

@app.route('/saludo/<nombre>')
def saludo_personalizado(nombre):
    return f'¡Hola, {nombre}!'

@app.route('/dinamicaPoblacional', methods=['POST'])
def endpoint_ejecutar_modelo():
    # Implementa la lógica de tu modelo aquí
    return '¡Hola, mundo! Este es mi proyecto Flask.'

# Endpoint para agregar un nuevo usuario sin hash
@app.route('/user/add', methods=['POST'])
def agregar_usuario():
    try:
        data = request.get_json()
        nuevo_usuario = usuarios(email=data['email'], password=data['password'])
        db.session.add(nuevo_usuario)
        db.session.commit()
        return jsonify({'mensaje': 'Usuario agregado exitosamente'})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint para eliminar un usuario por ID
@app.route('/user/delete/<int:usuario_id>', methods=['DELETE'])
def eliminar_usuario(usuario_id):
    try:
        usuario = usuarios.query.get(usuario_id)
        if usuario:
            db.session.delete(usuario)
            db.session.commit()
            return jsonify({'mensaje': 'Usuario eliminado exitosamente'}),200
        else:
            return jsonify({'error': 'Usuario no encontrado'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint para editar la información de un usuario por ID
@app.route('/user/edit/<int:usuario_id>', methods=['PUT'])
def editar_usuario(usuario_id):
    try:
        data = request.get_json()
        usuario = usuarios.query.get(usuario_id)

        if usuario:
            # Actualizar la información del usuario
            if 'email' in data:
                usuario.email = data['email']
            if 'password' in data:
                usuario.password = data['password']

            db.session.commit()
            return jsonify({'mensaje': 'Usuario editado exitosamente'})
        else:
            return jsonify({'error': 'Usuario no encontrado'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Endpoint para hacer login
@app.route('/user/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        usuario = usuarios.query.filter_by(email=data['email']).first()
        if usuario and usuario.password == data['password']:
            return jsonify({'mensaje': 'Inicio de sesión exitoso'}), 200
        else:
            return jsonify({'error': 'Credenciales incorrectas'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
