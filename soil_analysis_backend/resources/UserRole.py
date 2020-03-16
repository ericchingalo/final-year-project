from flask import request, jsonify
from flask_restful import Resource

from Model import db, UserRole, UserRoleSchema, UserPermission

user_role_schema = UserRoleSchema()
user_roles_schema = UserRoleSchema(many=True)

class UserRoleListAPI(Resource):
    def get(self):
        userRole = UserRole.query.all()
        returned_roles = user_roles_schema.dump(userRole)
        return jsonify({'status': 'success', 'data': returned_roles})

    def post(self):
        json_data = request.get_json(force=True)

        if not json_data:
            return {'message': 'No input provided'}, 400
        
        data, errors = user_role_schema.load(json_data)
        if errors:
            return errors, 422

        role = UserRole.query.filter_by(role_name=data['role_name']).first()
        if role:
            return {'message': 'User role already exists'}, 400

        user_role = UserRole(
            role_name=data['role_name']
        )

        db.session.add(user_role)
        db.session.commit()

        # adding the permissions to the role
        for requested_permission in data['permissions']:
            userPermission = UserPermission.query.filter_by(permission=requested_permission).first()
            user_role.permissions.append(userPermission)
            db.session.commit()

        result = user_role_schema.jsonify(user_role)

        return { 'status': 'success', 'data': result }, 201

class UserRoleAPI(Resource):
    def delete(self, id):
        role = UserRole.query.filter_by(role_id=id).delete()
        db.session.commit()

        result = user_role_schema.jsonify(role)
        return {'status': 'success', 'data': result},204
    
