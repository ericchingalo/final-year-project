from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestResult, SoilTestResultSchema

soil_test_result_schema = SoilTestResultSchema()
soil_test_results_schema = SoilTestResultSchema(many=True)

class SoilTestResultAPI(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input provided'}, 400
        data, errors = soil_test_result_schema(json_data)
        if errors:
            return errors, 422
        test_result = SoilTestResult(
            device_id = data['device_id']
        )

        db.session.add(test_result)
        db.session.commit()

        returned_results = soil_test_result_schema.jsonify(test_result)

        return {'status': 'success', 'data': returned_results}
    def get(self):
        results = SoilTestResult.query.all()
        returned_results = soil_test_results_schema.dump(results)
        return jsonify({'status': 'success', 'data': returned_devices})

    