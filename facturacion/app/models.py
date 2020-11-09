from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from app import app

import decimal
import flask.json

class MyJSONEncoder(flask.json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            # Convert decimal instances to strings.
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)

db = SQLAlchemy(app)
ma = Marshmallow(app)

app.json_encoder = MyJSONEncoder

class Cliente(db.Model):
    cliente_id = db.Column(db.Integer, primary_key=True)
    cliente_nombre = db.Column(db.String(70) )
    cliente_identificacion = db.Column(db.String(20), unique=True)
    cliente_fecha_creacion = db.Column(db.DateTime)

    def __init__(self, cliente_nombre, cliente_identificacion, cliente_fecha_creacion):
        self.cliente_nombre = cliente_nombre
        self.cliente_identificacion = cliente_identificacion
        self.cliente_fecha_creacion = cliente_fecha_creacion

class Oferta(db.Model):
    oferta_id = db.Column(db.Integer, primary_key=True)
    oferta_cliente_id = db.Column(db.Integer, db.ForeignKey('cliente.cliente_id'))
    oferta_valor = db.Column(db.DECIMAL(8,2))
    oferta_numero_producto = db.Column(db.Integer)
    oferta_fecha_creacion = db.Column(db.DateTime)
    oferta_dias_mora = db.Column(db.Integer)

    def __init__(self, oferta_cliente_id, oferta_valor, oferta_numero_producto, oferta_fecha_creacion, oferta_dias_mora):
        self.oferta_cliente_id = oferta_cliente_id
        self.oferta_valor = oferta_valor
        self.oferta_numero_producto = oferta_numero_producto
        self.oferta_fecha_creacion = oferta_fecha_creacion
        self.oferta_dias_mora = oferta_dias_mora

class Acuerdo(db.Model):
    acuerdo_id = db.Column(db.Integer, primary_key=True)
    acuerdo_oferta_id = db.Column(db.Integer, db.ForeignKey('oferta.oferta_id'))
    acuerdo_valor = db.Column(db.DECIMAL(8,2))
    acuerdo_fecha_pago = db.Column(db.DateTime)
    acuerdo_fecha_creacion = db.Column(db.DateTime)
    acuerdo_estado = db.Column(db.Boolean)

    def __init__(self, acuerdo_oferta_id, acuerdo_valor, acuerdo_fecha_pago, acuerdo_fecha_creacion, acuerdo_estado):
        self.acuerdo_oferta_id = acuerdo_oferta_id
        self.acuerdo_valor = acuerdo_valor
        self.acuerdo_fecha_pago = acuerdo_fecha_pago
        self.acuerdo_fecha_creacion = acuerdo_fecha_creacion
        self.acuerdo_estado = acuerdo_estado


db.create_all()

class ClienteSchema(ma.Schema):
    class Meta:
        fields = ('cliente_id', 'cliente_nombre', 'cliente_identificacion', 'cliente_fecha_creacion')


cliente_schema = ClienteSchema()
clientes_schema = ClienteSchema(many=True)

class OfertaSchema(ma.Schema):
    class Meta:
        fields = ('oferta_id', 'oferta_cliente_id', 'oferta_valor', 'oferta_numero_producto','oferta_fecha_creacion','oferta_dias_mora')


oferta_schema = OfertaSchema()
ofertas_schema = OfertaSchema(many=True)

class AcuerdoSchema(ma.Schema):
    class Meta:
        fields = ('acuerdo_id', 'acuerdo_oferta_id', 'acuerdo_valor', 'acuerdo_fecha_pago','acuerdo_fecha_creacion','acuerdo_estado')


acuerdo_schema = AcuerdoSchema()
acuerdos_schema = AcuerdoSchema(many=True)