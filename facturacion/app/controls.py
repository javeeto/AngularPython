from flask import render_template,Flask, request, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime
from app import app
from app import models

class Cliente():
    def consultaCliente(id):
        cliente = models.Cliente.query.filter(models.Cliente.cliente_identificacion==id)
        return models.clientes_schema.jsonify(cliente)

class Oferta():
    def consultaOferta(id):
        oferta = models.Oferta.query.filter(models.Oferta.oferta_cliente_id==id)
        return models.ofertas_schema.jsonify(oferta)

class Acuerdo():
    def agregaAcuerdo(acuerdos):
        now = datetime.now()
        dt_string = now.strftime("%Y-%m-%d %H:%M:%S")        
        listacuerdo=[]
        for x in range(0,len(acuerdos)):
            print(acuerdos[x]['acuerdo_oferta_id'])

            acuerdo_oferta_id = acuerdos[x]['acuerdo_oferta_id']
            acuerdo_valor = acuerdos[x]['acuerdo_valor']
            acuerdo_fecha_pago = dt_string
            acuerdo_fecha_creacion = dt_string
            acuerdo_estado = acuerdos[x]['acuerdo_estado']
            
            new_acuerdo= models.Acuerdo(acuerdo_oferta_id,\
            acuerdo_valor,\
            acuerdo_fecha_pago,\
            acuerdo_fecha_creacion,\
            acuerdo_estado)

            listacuerdo.append(new_acuerdo)
            
            models.db.session.add(new_acuerdo)

            models.db.session.commit()
            
    
        return models.acuerdos_schema.jsonify(listacuerdo)