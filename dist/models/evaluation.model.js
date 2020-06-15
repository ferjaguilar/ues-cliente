"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var evaluationSchema = new Schema({
  items: [{
    anios: {
      type: Number
    },
    disponibilidad: {
      type: Number
    },
    conocimiento: {
      type: Number
    },
    powerpoint: {
      type: Number
    },
    eduDistancia: {
      type: Number
    },
    LMS: {
      type: Number
    },
    responsabilidad: {
      type: Number
    },
    comunicacion: {
      type: Number
    },
    investigacion: {
      type: Number
    },
    interactuar: {
      type: Number
    }
  }],
  total_score: {
    type: Number,
    required: [true, 'Score is required']
  },
  IdGeneral: {
    type: Schema.Types.ObjectId,
    ref: 'Inscriptions',
    required: [true, 'ID is required'],
    autopopulate: true
  }
});
evaluationSchema.plugin(require('mongoose-autopopulate'));

var _default = _mongoose["default"].model('Evaluation', evaluationSchema);

exports["default"] = _default;