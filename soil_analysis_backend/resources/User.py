from flask import request, jsonify
from flask_restful import Resource

from Model import db, User, UserSchema, UserRole

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserListAPI(Resource):
    def get(self):
        users = User.query.order_by(User.name).all()
        returned_users = users_schema.dump(users)
        return jsonify({'status': 'success', 'data': returned_users})

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
               return {'message': 'No input data provided'}, 400
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        # check for user name
        user = User.query.filter_by(user_name=data['user_name']).first()
        if user:
            return {'message': 'User name already exists'}, 400
        
        # check for user role
        role = UserRole.query.filter_by(role_id=json_data['role_id']).first()
        if not role:
            return  {'message': 'Assigned role does not exist'}, 400
        new_user = User(
            user_name=json_data['user_name'],
            email=json_data['email'],
            password=json_data['password'],
            region=json_data['region'],
            role=role
            )

        db.session.add(new_user)
        db.session.commit()

        result = user_schema.jsonify(new_user)

        return { "status": 'success', 'data': result }, 201

class UserAPI(Resource):
    def get(self, id):
        user = User.query.filter_by(user_id=id).first()
        if not user:
            return {'message': 'User with given user_id is not found'}, 400
        return {'data': user_schema.jsonify(user)}, 200
    
    def delete(self, id):
        user = User.query.filter_by(user_id=id).delete()
        db.session.commit()

        result = user_schema.jsonify(user)
        return {'status': 'success', 'data': result},204
    
    def put(self, id):
        json_data = request.get_json(force=True)

        if not json_data:
            return {'message': 'No input provided'}

        # validate and deserialize
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422

        user = User.query.filter_by(user_id=id).first()

        # if user is not there
        if not user:
            return {'message': 'User doesnt exist'}, 400

        # checking the passed properties
        if data['user_name']:
            user.user_name = data['user_name']
        if data['emain']:
            user.email = data['email']
        if data['password']:
            user.password = data['password']
        if data['role_id']:
            # check if role exists
            role = UserRole.query.filter_by(role_id=data['role_id']).first()
            if not role:
                return  {'message': 'Assigned role does not exist'}, 400
            user.role = role
        if data['region']:
            user.region = data['region']

        # saving the updates
        db.session.commit()
        result = user_schema.jsonify(user)
        
        return { "status": 'success', 'data': result }, 200