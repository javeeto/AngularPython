# views.py

from flask import render_template,Flask, request, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime
from app import app
from app import models
from app import controls

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/cliente/<id>', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def get_cliente(id):
  return controls.Cliente.consultaCliente(id)

@app.route('/oferta/<id>', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def get_oferta(id):
     return controls.Oferta.consultaOferta(id)

@app.route('/acuerdo', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def create_acuerdo():
    acuerdos=request.json
    return controls.Acuerdo.agregaAcuerdo(acuerdos)
