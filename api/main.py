
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
    id_caso: int
    id_medicion: int
    gestionado_por: int
    estado: str
    
class Casos(BaseModel):
    nombre: str
    descripcion: str
    solucion: str

class Dispositivos(BaseModel):
    nombre: str
    estado: str

class Mediciones(BaseModel):
    co: float
    temperatura: float
    humedad: float

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
                "id_caso": data[1],
                "id_medicion": data[2],
                "gestionado_por": data[3],
                "zona": data[4],
                "fecha_hora": data[5],
                "estado": data[6]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"listado": json_data}
    except (Exception) as error:
        return {"resultado": error}

@app.get("/listadocasos")
def listadocasos():
    try:
        cursor = mydb.cursor()
        cursor.execute("SELECT * FROM casos")
        respuesta = cursor.fetchall()
        cursor.close()
        payload = []
        contenido = {}
        for data in respuesta:
            contenido = {
                "id_caso": data[0],
                "nombre": data[1],
                "descripcion": data[2],
                "solucion": data[3]
            }
            payload.append(contenido)
            contenido = {}
        print(payload)
        json_data = jsonable_encoder(payload)
        return {"Listado": json_data}
    except Exception as error:
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
                "zona": data[1],
                "co": data[2],
                "unidad_co": data[3],
                "temperatura": data[4],
                "unidad_temp": data[5],
                "humedad": data[6],
                "unidad_hum": data[7],
                "fecha_hora": data[8]
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
def añadiralerta(nuevaalerta: Alertas, caso: Casos):
    try:
        id_caso = nuevaalerta.id_caso
        id_medicion = nuevaalerta.id_medicion
        gestionado_por = nuevaalerta.gestionado_por
        estado = nuevaalerta.estado
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO alertas(id_caso, id_medicion, gestionado_por, estado) VALUES(%s, %s, %s, %s)", (id_caso, id_medicion, gestionado_por, estado))
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
        co = nuevamedicion.co
        temperatura = nuevamedicion.temperatura
        humedad = nuevamedicion.humedad
        cursor = mydb.cursor()
        cursor.execute("INSERT INTO mediciones(co, temperatura, humedad) VALUES(%s, %s, %s)", (co, temperatura, humedad))
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