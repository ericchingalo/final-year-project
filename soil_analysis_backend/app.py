from flask import Blueprint
from flask_restful import Api

from resources.Hello import Hello
from resources.User import UserListAPI, UserAPI
from resources.UserPermission import UserPermissionAPI
from resources.UserRole import UserRoleAPI, UserRoleListAPI
from resources.Parameter import ParameterListAPI, ParameterAPI
from resources.SoilTestDevice import SoilTestDeviceAPI, SoilTestDeviceListAPI
from resources.SoilTestResult import SoilTestResultAPI

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

# Routes
api.add_resource(Hello, '/hello')
api.add_resource(UserListAPI, '/user')
api.add_resource(UserAPI, '/user/<int:id>')
api.add_resource(UserPermissionAPI, '/permission')
api.add_resource(UserRoleAPI, '/userRole/<int:id>')
api.add_resource(UserRoleListAPI, '/userRole')
api.add_resource(ParameterAPI, '/parameter/<int:id>')
api.add_resource(ParameterListAPI, '/parameter')
api.add_resource(SoilTestDeviceListAPI, '/device')
api.add_resource(SoilTestDeviceAPI, '/device/<int:id>')
api.add_resource(SoilTestResultAPI, '/result')