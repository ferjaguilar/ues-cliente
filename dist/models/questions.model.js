"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var questionsSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    "default": Date.now()
  }
});

var _default = _mongoose["default"].model('Questions', questionsSchema);

exports["default"] = _default;