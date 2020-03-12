from flask import request, jsonify
from flask_restful import Resource

from Model import db, Parameter, ParameterSchema

parameter_schema = ParameterSchema()
parameters_schema = ParameterSchema(many=True)

class ParameterListAPI(Resource):
    def get(self):
        parameters = Parameter.query.all()
        returned_parameters = parameters_schema.dump(parameters)
        return jsonify({'status': 'success', 'data': returned_parameters})

    def post(self):
        json_data = request.get_json(force=True)

        if not json_data:
            return {'message': 'No input provided'}, 400
        
        data, errors = parameter_schema.load(json_data)
        if errors:
            return errors, 422

        parameter = Parameter.query.filter_by(parameter_name=data['parameter_name']).first()
        if parameter:
            return {'message': 'Parameter already exists'}, 400

        param =     Parameter(
            parameter_name=data['parameter_name']
        )

        db.session.add(param)
        db.session.commit()

        result = parameter_schema.jsonify(param)

        return { "status": 'success', 'data': result }, 201

class ParameterAPI(Resource):
    def delete(self, name):
        parameter = Parameter.query.filter_by(parameter_name=name).delete()
        db.session.commit()

        result = parameter_schema.jsonify(parameter)
        return {'status': 'success', 'data': result},204
