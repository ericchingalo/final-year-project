from flask_restful import Resource

class Hello(Resource):
    def get(self):
        return {"message": "Welcome to soil analysis api!"}