from flask import request, jsonify
from flask_restful import Resource

from Model import db, User, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserListAPI(Resource):
    def get(self):
        users = User.query.all()
        returned_users = users_schema.dump(users)
        return jsonify({'status': 'success', 'data': returned_users})