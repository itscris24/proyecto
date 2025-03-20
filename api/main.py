
from fastapi import FastAPI
import mysql.connector
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

app = FastAPI()

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "Crilui0104.",
    database = "proyecto"
)

class Alertas(BaseModel):
    id_medicion: int
    tipo_alerta: str
    estado: str
    gestionado_por: int

class Dispositivos(BaseModel):
    nombre: str
    estado: str

class Mediciones(BaseModel):
    id_dispositivo: int
    tipo_medicion: str
    valor: float

class Usuarios(BaseModel):
    usuario: str
    contraseña: str
    tipo_usuario: str
    correo: str

@app.get("/listadoalertas")
def listadoalertas():
    try:
        cursor = mydb.cursor()
        cursor.execute("SELECT * FROM alertas")
        respuesta = cursor.fetchall()
        cursor.close()
        payload = []
        contenido = {}
        for data in respuesta:
            contenido = {
                "id_alerta": data[0],
                "id_medicion": data[1],
                "tipo_alerta": data[2],
                "estado": data[3],
                "gestionado_por": data[4],
                "fecha_hora": data[5]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"listado": json_data}
    except (Exception) as error:
        return {"resultado": error}
    
@app.get("/listadodispositivos")
def listadodispositivos():
    try:
        cursor = mydb.cursor()
        cursor.execute("SELECT * FROM dispositivos")
        respuesta = cursor.fetchall()
        cursor.close()
        payload = []
        contenido = {}
        for data in respuesta:
            contenido = {
                "id_dispositivo": data[0],
                "nombre": data[1],
                "estado": data[2]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"listado": json_data}
    except (Exception) as error:
        return {"resultado": error}

@app.get("/listadomediciones")
def listadomediciones():
    try:
        cursor = mydb.cursor()
        cursor.execute("SELECT * FROM mediciones")
        respuesta = cursor.fetchall()
        cursor.close()
        payload = []
        contenido = {}
        for data in respuesta:
            contenido = {
                "id_medicion": data[0],
                "id_dispositivo": data[1],
                "tipo_medicion": data[2],
                "valor": data[3],
                "fecha_hora": data[4]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"listado": json_data}
    except (Exception) as error:
        return {"resultado": error}
    
@app.get("/listadousuarios")
def listadousuarios():
    try:
        cursor = mydb.cursor()
        cursor.execute("SELECT * FROM usuarios")
        respuesta = cursor.fetchall()
        cursor.close()
        payload = []
        contenido = {}
        for data in respuesta:
            contenido = {
                "id_usuario": data[0],
                "usuario": data[1],
                "contraseña": data[2],
                "tipo_usuario": data[3],
                "correo": data[4]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"listado": json_data}
    except (Exception) as error:
        return {"resultado": error}
    
@app.post("/añadiralerta")
def añadiralerta(nuevaalerta: Alertas):
    try:
        id_medicion = nuevaalerta.id_medicion
        tipo_alerta = nuevaalerta.tipo_alerta
        estado = nuevaalerta.estado
        gestionado_por = nuevaalerta.gestionado_por
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO alertas(id_medicion, tipo_alerta, estado, gestionado_por) VALUES(%s, %s, %s, %s)", (id_medicion, tipo_alerta, estado, gestionado_por))
        mydb.commit()
        cursor.close()
        return{"información": "Alerta registrada exitosamente"}
    except Exception as error:
        return {"resultado": error}
    
@app.post("/añadirdispositivo")
def añadirdispositivo(nuevodispositivo: Dispositivos):
    try:
        nombre = nuevodispositivo.nombre
        estado = nuevodispositivo.estado
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO dispositivos(nombre, estado) VALUES(%s, %s)", (nombre, estado))
        mydb.commit()
        cursor.close()
        return{"información": "Dispositivo registrado exitosamente"}
    except Exception as error:
        return {"resultado": error}
    
@app.post("/añadirmedicion")
def añadirmedicion(nuevamedicion: Mediciones):
    try:
        id_dispositivo = nuevamedicion.id_dispositivo
        tipo_medicion = nuevamedicion.tipo_medicion
        valor = nuevamedicion.valor
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO mediciones(id_dispositivo, tipo_medicion, valor) VALUES(%s, %s, %s)", (id_dispositivo, tipo_medicion, valor))
        mydb.commit()
        cursor.close()
        return{"información": "Medición registrada exitosamente"}
    except Exception as error:
        return {"resultado": error}

@app.post("/añadirusuario")
def añadirusuario(nuevousuario: Usuarios):
    try:
        usuario = nuevousuario.usuario
        contraseña = nuevousuario.contraseña
        tipo_usuario = nuevousuario.tipo_usuario
        correo = nuevousuario.correo
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO usuarios(usuario, contraseña, tipo_usuario, correo) VALUES(%s, %s, %s, %s)", (usuario, contraseña, tipo_usuario, correo))
        mydb.commit()
        cursor.close()
        return{"información": "Usuario registrado exitosamente"}
    except Exception as error:
        return {"resultado": error}