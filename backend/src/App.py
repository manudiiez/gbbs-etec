from flask import Flask, request, url_for, jsonify
from flask_mysqldb import MySQL
from flask_socketio import SocketIO
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from dotenv import load_dotenv
from os import getenv
from datetime import datetime, timedelta
from jwt import encode, decode, exceptions



from config import config


# ------------------------------ DEFINIMOS FLASK ----------------------------- #
app = Flask(__name__)
# -------------------------- CONFIGURACION DE MYSQL -------------------------- #
db=MySQL(app)
# ---------------------------- DEFINIMOS SOCKETIO ---------------------------- #
socketio = SocketIO(app)

# ------------ DEFINIMOS CORS PARA PODER UTILIZAR LA APP CON REACT ----------- #
CORS(app)



# ---------------------------- DEFINIMOS LAS RUTAS --------------------------- # 

# ------------------------------- CREAR USUARIO ------------------------------ #
@app.route('/add_user', methods=['POST'])
def add_user():
    print('add_user')
    if request.method == 'POST':
        fullname = request.json['fullname']
        username = request.json['username']
        password = request.json['password']
        email = request.json['email']
        print(email)
        default_pfp = url_for('static', filename='img/default-A.png')
        password_hash = generate_password_hash(password, method='sha256')
        cur = db.connection.cursor()
        cur.execute('SELECT * FROM usuario WHERE nombre_usuario = ' + '"' + username + '"')
        usuario_existente = cur.rowcount
        cur.execute('SELECT * FROM usuario WHERE email = ' + '"' + email + '"')
        email_existente = cur.rowcount
        if usuario_existente <= 0 and email_existente <= 0:
            cur.execute('INSERT INTO usuario (nombre_completo, email, contraseña, nombre_usuario, foto_perfil) VALUES (%s, %s, %s, %s, %s)', 
            (fullname, email, password_hash, username, default_pfp))
            db.connection.commit()
            return jsonify({
                'alertTitle': 'Bien hecho',
                'alertMessage': '¡Usuario creado correctamente!',
                'alertIcon': 'success',
                'showConfirmButton': True,
                'timer': False,
                'ruta': ''
            })
        else:
            return jsonify({
                'alertTitle': 'Error',
                'alertMessage': '¡Ese nombre de usuario esta ocupado!',
                'alertIcon': 'error',
                'showConfirmButton': True,
                'timer': False,
                'ruta': ''
            })

# ------------------------------ INICIAR SESION ------------------------------ #
@app.route('/sign_in', methods=['POST'])
def sign_in():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        cur = db.connection.cursor()
        sql = 'SELECT * FROM usuario WHERE nombre_usuario =' + '"' + username + '"'
        cur.execute(sql)
        usuario_existente = cur.fetchone()
        if usuario_existente != None:
            print(password)
            print('password is:')
            if check_password_hash(usuario_existente[3], password):

                data = request.get_json()

                now = datetime.now()
                new_date = now + timedelta(14)
                token = encode(payload={**data, 'exp': new_date}, key=getenv("SECRET"), algorithm='HS256')


                return jsonify({
                    'token': token,
                    'alert':{
                        'alertTitle': 'Bien hecho',
                        'alertMessage': '¡Ahora puedes acceder a todas las funciones del GBBS!',
                        'alertIcon': 'success',
                        'showConfirmButton': True,
                        'timer': False,
                        'ruta': '/'
                    }
                })
            else:
                return jsonify({
                    'alert':{
                        'alertTitle': 'Error',
                        'alertMessage': '¡La contraseña esta mal escrita!',
                        'alertIcon': 'error',
                        'showConfirmButton': True,
                        'timer': False,
                        'ruta': ''
                    }
                })
        else:
            return jsonify({
                'alert':{
                    'alertTitle': 'Error',
                    'alertMessage': '¡Ese nombre de usuario no existe!',
                    'alertIcon': 'error',
                    'showConfirmButton': True,
                    'timer': False,
                    'ruta': ''
                }
            })

# --------------------------- SUBIR FOTO DE PERFIL --------------------------- #
# @app.route('/subir_foto_de_perfil', methods=['POST'])
# def subir_foto_de_perfil():
#     if request.method == 'POST':
#         # obtenemos el archivo del input "archivo"
#         f = request.files['archivo']
#         filename = secure_filename(f.filename)
#         # Guardamos el archivo en el directorio "/static/img"
#         f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#         #Guardamos la ruta del archivo en una variable global llamada foto_perfil.
#         global foto_perfil
#         foto_perfil = url_for('static', filename='img/' + filename)
#         cur = mysql.connection.cursor()
#         cur.execute('UPDATE usuario SET foto_perfil = ' + '"' + foto_perfil + '"' + ' WHERE nombre_usuario = ' + '"' + sesion[4] + '"')
#         mysql.connection.commit()
#         print(filename)
#         print(foto_perfil)
        
#         # Retornamos una respuesta satisfactoria
#         return render_template('usuario.html', nombre = sesion[1], email = sesion[2], nombre_usuario = sesion[4], foto_perfil = foto_perfil)

@app.route('/edit_img', methods=['POST'])
def edit_img():
    print('edit_img')
    if request.method == 'POST':
        file = request.files['file']
        username = request.form['username']
        files = {'file': file.read()}
        # print(files) 
        print(username) 
        cur = db.connection.cursor()
        sql = 'SELECT * FROM usuario WHERE nombre_usuario =' + '"' + username + '"'
        cur.execute(sql)
        usuario_existente = cur.fetchone()
        if usuario_existente != None:
            sql = 'UPDATE usuario SET foto_perfil =' + '"' + username + '"' + ' WHERE nombre_usuario =' + '"' + username + '"'
            print(sql)
            
        

        return jsonify({
            'message': 'file'
        })  

# ----------------------- VALIDAR LA SESION DEL USUARIO ---------------------- #
@app.route('/user_auth', methods=['POST'])
def user_auth():
    print('auth_user')
    if request.method == 'POST':
        token = request.json['token']
        usuario = decode(token, key=getenv("SECRET"), algorithms=['HS256'] )
        username = usuario['username']
        password = usuario['password']
        cur = db.connection.cursor()
        sql = 'SELECT * FROM usuario WHERE nombre_usuario =' + '"' + username + '"'
        cur.execute(sql)
        usuario_existente = cur.fetchone()
        if usuario_existente != None:
            if check_password_hash(usuario_existente[3], password):
                print(usuario_existente)
                return jsonify({
                    'id': usuario_existente[0],
                    'nombre_completo': usuario_existente[1],
                    'email': usuario_existente[2],
                    'nombre_usuario': usuario_existente[4],
                    'foto_perfil': usuario_existente[5]
                })
        else:
            return jsonify({
                'usuario': None
            })

    else:
        return jsonify({
            'usuario': None
        })

        
        
# ------------------------------- OBTENER FOROS ------------------------------ #
@app.route('/forums')
def forums():
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM foro')
    data = cur.fetchall()
    print(data)
    return jsonify(data)

# --------------------------- OBTENER FORO SEGUN ID -------------------------- #
@app.route('/forum/<id>')
def forum(id):
    print('forum unique')
    print(id)
    cur = db.connection.cursor()
    cur.execute('SELECT * FROM foro WHERE id =' + '"' + id + '"')
    data = cur.fetchone()
    print(data)
    return jsonify({
        'id': data[0],
        'autor': data[1],
        'cuerpo': data[2],
        'titulo': data[3],
        'subtitulo': data[4],
        'fecha': data[5]
    })

# -------------------------------- CREAR FORO -------------------------------- #
@app.route('/add_forum', methods=['POST'])
def add_forums():
    # if request.method == 'POST':
    #     print(datetime.now())
    #     return jsonify({
    #         'alertTitle': 'Bien hecho',
    #         'alertMessage': '¡Foro creado correctamente!',
    #         'alertIcon': 'success',
    #         'showConfirmButton': True,
    #         'timer': False,
    #         'ruta': ''
    #     })

    if request.method == 'POST':
        titulo = request.json['titulo']
        subtitulo = request.json['subtitulo']
        cuerpo = request.json['cuerpo']
        autor = request.json['autor']
        cur = db.connection.cursor()
        cur.execute('SELECT * FROM foro WHERE titulo = ' + '"' + titulo + '"')
        foro_existente = cur.rowcount
        if foro_existente <= 0:
            cur.execute('INSERT INTO foro (autor, cuerpo, titulo, subtitulo ) VALUES (%s, %s, %s, %s)', 
            (autor, cuerpo, titulo, subtitulo))
            db.connection.commit()
            return jsonify({
                'alertTitle': 'Bien hecho',
                'alertMessage': '¡Foro creado correctamente!',
                'alertIcon': 'success',
                'showConfirmButton': True,
                'timer': False,
                'ruta': ''
            })
        else:
            return jsonify({
                'alertTitle': 'Error',
                'alertMessage': '¡El titulo del foro ya esta en uso!',
                'alertIcon': 'error',
                'showConfirmButton': True,
                'timer': False,
                'ruta': ''
            })


# ---------------- CREAMOS EL BUCLE PRINCIPLA DE LA APLICACION --------------- #
if (__name__) == '__main__':
    load_dotenv()
    app.config.from_object(config['development'])
    app.run(port=5000, debug=True)
    socketio.run(app, debug=True)