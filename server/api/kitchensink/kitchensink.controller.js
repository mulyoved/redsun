'use strict';

var _ = require('lodash');
var Kitchensink = require('./kitchensink.model');

// Get list of kitchensinks
exports.index = function(req, res) {
  Kitchensink.find(function (err, kitchensinks) {
    if(err) { return handleError(res, err); }
    return res.json(200, kitchensinks);
  });
};

// Get a single kitchensink
exports.show = function(req, res) {
  Kitchensink.findById(req.params.id, function (err, kitchensink) {
    if(err) { return handleError(res, err); }
    if(!kitchensink) { return res.send(404); }
    return res.json(kitchensink);
  });
};

// Creates a new kitchensink in the DB.
exports.create = function(req, res) {
  Kitchensink.create(req.body, function(err, kitchensink) {
    if(err) { return handleError(res, err); }
    return res.json(201, kitchensink);
  });
};

// Updates an existing kitchensink in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Kitchensink.findById(req.params.id, function (err, kitchensink) {
    if (err) { return handleError(res, err); }
    if(!kitchensink) { return res.send(404); }
    var updated = _.merge(kitchensink, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, kitchensink);
    });
  });
};

// Deletes a kitchensink from the DB.
exports.destroy = function(req, res) {
  Kitchensink.findById(req.params.id, function (err, kitchensink) {
    if(err) { return handleError(res, err); }
    if(!kitchensink) { return res.send(404); }
    kitchensink.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}