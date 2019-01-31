'use strict'

var varnewPathController = require('./newPathControllerService');

module.exports.funcnewPathGET = function funcnewPathGET(req, res, next) {
  varnewPathController.funcnewPathGET(req.swagger.params, res, next);
};