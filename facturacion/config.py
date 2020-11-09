# config.py

# Enable Flask's debugging features. Should be False in production
DEBUG = True
SQLALCHEMY_DATABASE_URI='mysql+pymysql://usercode:password@localhost/facturacion'
SQLALCHEMY_TRACK_MODIFICATIONS=False
CORS_HEADERS='Access-Control-Allow-Origin'