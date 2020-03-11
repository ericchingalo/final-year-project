'''
this file will hold the connections to the database
'''
from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy


ma = Marshmallow()
db = SQLAlchemy()

class UserRole(db.Model):
    __tablename__ = 'user_roles'

    id = db.Column('role_id', db.Integer, primary_key=True)
    name = db.Column( 'role_name', db.String(200), unique=True)

    def __init__(self, name):
        self.name = name

class UserPermission(db.Model):
    __tablename__ = 'user_permissions'

    permission = db.Column(db.String(200), primary_key=True)

    def __init__(self, permission):
        self.permission = permission

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column('user_id', db.Integer, primary_key=True)
    name = db.Column('user_name', db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(100))
    # TODO encrypt the password
    password = db.Column(db.String(50), nullable=False)
    # TODO Add location
    region = db.Column(db.String(50))

    def __init__(self, name, email, password, region):
        self.name = name
        self.email = email
        self.password = password
        self.region = region

class Parameter(db.Model):
    __tablename__ = 'parameters'

    name = db.Column('parameter_name', db.String(50), primary_key=True)
    last_updated = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __init__(self, name):
        self.name = name

class SoilTestDevice(db.Model):
    __tablename__ = 'soil_test_devices'

    id = db.Column(db.Integer, primary_key=True)

class SoilTestResult(db.Model):
    __tablename__='soil_test_results'

    id = db.Column('result_id' ,db.Integer, primary_key=True)
    created = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)


