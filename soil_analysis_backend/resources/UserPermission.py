from flask import request, jsonify
from flask_restful import Resource

from Model import UserPermission, UserPermissionSchema

user_permission_schema = UserPermissionSchema()
user_permissions_schema = UserPermissionSchema(many=True)

class UserPermissionAPI(Resource):
    def get(self):
        permissions = UserPermission.query.all()
        returned_permissions = user_permissions_schema.dump(permissions)
        return jsonify({'status': 'success', 'data': returned_permissions})
    
    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422
        userPermission = UserPermission.query.filter_by(permission=data['permission']).first()
        if userPermission:
            return {'message': 'Permission name already exists'}, 400

        new_permission = UserPermission(
            permission=json_data['permission'],
            )

        db.session.add(new_permission)
        db.session.commit()

        result = user_permission_schema.jsonify(new_permission)

        return { "status": 'success', 'data': result }, 201