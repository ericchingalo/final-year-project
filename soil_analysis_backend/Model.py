'''
this file will hold the connections to the database
'''
from flask import Flask
from marshmallow import Schema, fields, pre_load, validate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

ma = Marshmallow()
db = SQLAlchemy()

'''
the models:
'''

# Join table for user_permissions and user_roles 
rolePermission = db.Table(
    'role_permissions',
    db.Model.metadata,
    db.Column('permission', db.String(200), db.ForeignKey('user_permissions.permission'), primary_key=True),
    db.Column('role_id', db.Integer, db.ForeignKey('user_roles.role_id'), primary_key=True)
)

'''
for user permissions
'''
class UserPermission(db.Model):
    __tablename__ = 'user_permissions'

    permission = db.Column(db.String(200), primary_key=True)

    def __init__(self, permission):
        self.permission = permission
    
class UserPermissionSchema(ma.Schema):
    permission = fields.String(required=True)

    class Meta:
        fields = ('permission',)


'''
for user roles
'''
class UserRole(db.Model):
    __tablename__ = 'user_roles'

    id = db.Column('role_id', db.Integer, primary_key=True)
    name = db.Column( 'role_name', db.String(200), unique=True, nullable=False)
    users = db.relationship('User', backref='role', lazy=True)
    permissions = db.relationship('UserPermission', secondary=rolePermission, lazy='joined', backref = db.backref('userRoles', lazy=True))

    def __init__(self, name):
        self.name = name

class UserRoleSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    
    class Meta:
        fields = ('role_id', 'role_name')

'''
for users
'''
class User(db.Model):
    __tablename__ = 'users'

    id = db.Column('user_id', db.Integer, primary_key=True)
    name = db.Column('user_name', db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(100))
    # TODO encrypt the password
    password = db.Column(db.String(50), nullable=False)
    # TODO Add location
    region = db.Column(db.String(50))
    role_id = db.Column(db.Integer, db.ForeignKey('user_roles.role_id'), nullable=False)

    def __init__(self, name, email, password, region, role_id):
        self.name = name
        self.email = email
        self.password = password
        self.region = region
        self.role_id = role_id

class UserSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    email = fields.String(required=True)
    password = fields.String(required=True)
    region = fields.String()

    class Meta:
        fields = ('user_id', 'user_name', 'email', 'password', 'region', 'role_id')


# join tables for parameters and soilTestResults
parameterResults = db.Table(
    'parameter_results',
    db.Model.metadata,
    db.Column('parameter_name', db.String(50), db.ForeignKey('parameters.parameter_name'), primary_key=True),
    db.Column('result_id', db.Integer, db.ForeignKey('soil_test_results.result_id'), primary_key=True),
    db.Column('value', db.Integer, nullable=False)
)

'''
for parameters
'''
class Parameter(db.Model):
    __tablename__ = 'parameters'

    name = db.Column('parameter_name', db.String(50), primary_key=True)
    last_updated = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def __init__(self, name):
        self.name = name

class ParameterSchema(ma.Schema):
    name = fields.String(required=True)
    last_updated = fields.DateTime()

    class Meta:
        fields = ('parameter_name', 'last_updated')


'''
for soil test devices
'''
class SoilTestDevice(db.Model):
    __tablename__ = 'soil_test_devices'

    id = db.Column( 'device_id',db.Integer, primary_key=True)
    results = db.relationship('SoilTestResult', backref='device', lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    user = db.relationship('User', backref= db.backref('device', lazy=True))

    def __init__(self, user_id):
        self.user_id = user_id

class SoilTestDeviceSchema(ma.Schema):
    id = fields.Integer(required=True)

    class Meta:
        fields = ('device_id', 'user_id')


'''
for soil test results
'''
class SoilTestResult(db.Model):
    __tablename__='soil_test_results'

    id = db.Column('result_id' ,db.Integer, primary_key=True)
    created = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)
    device_id = db.Column('device_id', db.Integer, db.ForeignKey('soil_test_devices.device_id'), nullable=False)
    values = db.relationship('Parameter', secondary=parameterResults, lazy='joined', backref = db.backref('parameterResults', lazy=True))
    def __init__(self, device_id):
        self.device_id = device_id

class SoilTestResultSchema(ma.Schema):
    id = fields.Integer(required=True)
    created = fields.DateTime()

    class Meta:
        fields = ('result_id', 'created', 'device_id')


