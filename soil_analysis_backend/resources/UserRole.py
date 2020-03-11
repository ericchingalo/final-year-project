from flask import request, jsonify
from flask_restful import Resource

from Model import db, UserRole, UserRoleSchema

user_role_schema = UserRoleSchema()
user_roles_schema = UserRoleSchema(many=True)