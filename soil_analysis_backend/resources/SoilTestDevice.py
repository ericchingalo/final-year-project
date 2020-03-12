from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestDevice, SoilTestDeviceSchema

soil_test_device_schema = SoilTestDeviceSchema()
soil_test_devices_schema = SoilTestDeviceSchema(many=True)

class SoilTestDeviceListAPI(Resource):
    def get(self):
        device = SoilTestDevice.query.all()
        returned_devices = soil_test_devices_schema.dump(device)
        return jsonify({'status': 'success', 'data': returned_devices})

    def post(self):
        json_data = request.get_json(force=True)
        if not json_data:
            return {'message': 'No input provided'}, 400
        data, errors = soil_test_device_schema.load(json_data)
        if errors:
            return errors, 422
        
        new_device = SoilTestDevice(
            user_id=data['user_id']
        )
        db.session.add(new_device)
        db.session.commit()

        returned_device = soil_test_device_schema.jsonify(new_device)
        return {'status': 'success', 'data': returned_device}

class SoilTestDeviceAPI(Resource):
    def delete(self, id):
        device = SoilTestDevice.query.filter_by(device_id=id).delete()
        db.session.commit()

        returned_device = soil_test_device_schema.jsonify(device)
        return { 'status':'success' ,'data': returned_device}