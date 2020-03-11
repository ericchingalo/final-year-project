from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestDevice, SoilTestDeviceSchema

soil_test_device_schema = SoilTestDeviceSchema()
soil_test_devices_schema = SoilTestDeviceSchema(many=True)