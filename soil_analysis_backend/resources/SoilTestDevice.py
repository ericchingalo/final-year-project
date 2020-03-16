from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestDevice, SoilTestDeviceSchema, User

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
        
        selected_user = User.query.filter_by(user_id=data['user_id']).first()

        if not selected_user:
            return {'message': 'Assigned user not found'}, 404

        new_device = SoilTestDevice(
            user = selected_user
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
    
    def put(self, id):
        json_data = request.get_json(force=True)

        if not json_data:
            return {'message': 'No input provided'}, 400

        # validate and deserialize
        data, errors = user_schema.load(json_data)
        if errors:
            return errors, 422
        
        if not data['user_id']:
            return {'message': 'No user id specified'}, 400

        user = User.query.filter_by(user_id=data['user_id']).first()

        # if user is not there
        if not user:
            return {'message': 'Assigned user doesnt exist'}, 400
        
        device = SoilTestDevice.query.filter_by(device_id=id).first()
        device.user = user
        db.session.commit()

        result = soil_test_device_schema.jsonify(device)
        return {'status': 'success', 'data': ''}, 200
        