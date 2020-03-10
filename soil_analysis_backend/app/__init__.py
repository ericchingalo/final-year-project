import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from dotenv import load_dotenv

# to load the enviromental variables
load_dotenv(dotenv_path='.env')

# configurations
class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = bool(os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS'))

app = Flask(__name__)
app.config.from_object(Config())

# to register all the models
# app.register_blueprint()

db = SQLAlchemy(app)

db.create_all()