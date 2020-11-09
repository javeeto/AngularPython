# app/__init__.py

from flask import Flask
#from config import app_config
# Initialize the app
app = Flask(__name__, instance_relative_config=True)


# Load the config file
app.config.from_object('config')
#app.config.from_pyfile('config.py')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://usercode:clave@localhost/facturacion'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = ['Access-Control-Allow-Origin']

# Load the models
from app import models

# Load the views
from app import views
