from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestResult, SoilTestResultSchema, SoilTestDevice, Parameter, ParameterResults

soil_test_result_schema = SoilTestResultSchema()
soil_test_results_schema = SoilTestResultSchema(many=True)

class SoilTestResultAPI(Resource):
    def get(self, id):
        test_device = SoilTestDevice.query.filter_by(device_id=id).first()
        if not test_device:
            return {'message': 'Device not found'}, 404

        results = SoilTestResult.query.filter_by(device_id=id)
        if not results:
            return {'message': 'Results not found'}, 404
            
        returned_results ={}
        returned_results['device'] = test_device.device_id
        returned_results['user'] = test_device.user

        resultList = []
        for result in results:
            returned_result = {}
            for paramValue in result.value:
                returned_result['value'] = paramValue.value
                returned_result['parameter'] = paramValue.parameter
            resultList.append(returned_result)
        returned_results['results'] = resultList

        return jsonify({'status': 'success', 'data': returned_results})


class SoilTestResultListAPI(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input provided'}, 400
        data, errors = soil_test_result_schema(json_data)
        if errors:
            return errors, 422
        
        test_device = SoilTestDevice.query.filter_by(device_id=data['device_id']).first()
        if not test_device:
            return {'message': 'Device not found'}, 404

        test_result = SoilTestResult(
            device = test_device
        )

        for param in data['parameters']:
            parameter = Parameter.query.filter_by(parameter_name=param['parameter']).first()
            if not parameter:
                return {'message': 'Parameter not found'}, 404
            resultValue = ParameterResults(value=param['value'], parameter=param)
            test_result.value.append(resultValue)

        db.session.add(test_result)
        db.session.commit()

        returned_results = soil_test_result_schema.jsonify(test_result)

        return {'status': 'success', 'data': returned_results}, 200

    def get(self):
        results = SoilTestResult.query.all()
        returned_results = soil_test_results_schema.dump(results)
        return jsonify({'status': 'success', 'data': returned_results})

    