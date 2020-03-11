from flask import Blueprint
from flask_restful import Api

from resources.Hello import Hello
from resources.User import UserListAPI

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

# Routes
api.add_resource(Hello, '/hello')
api.add_resource(UserListAPI, '/user')