from flask import request, jsonify
from flask_restful import Resource

from Model import db, SoilTestResult, SoilTestResultSchema

soil_test_result_schema = SoilTestResultSchema()
soil_test_results_schema = SoilTestResultSchema(many=True)