/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Kitchensink = require('./kitchensink.model');

exports.register = function(socket) {
  Kitchensink.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Kitchensink.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('kitchensink:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('kitchensink:remove', doc);
}