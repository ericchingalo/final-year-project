from flask import request, jsonify
from flask_restful import Resource

from Model import UserPermission, UserPermissionSchema

user_permission_schema = UserPermissionSchema()
user_permissions_schema = UserPermissionSchema(many=True)