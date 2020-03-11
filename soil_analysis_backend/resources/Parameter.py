from flask import request, jsonify
from flask_restful import Resource

from Model import db, Parameter, ParameterSchema

parameter_schema = ParameterSchema()
parameters_schema = ParameterSchema(many=True)