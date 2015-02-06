'use strict';

function Pakker () {}

Pakker.prototype.assign = function (key, value) {
  this[key] = value;
};

Pakker.prototype.delete = function (key) {
  delete this[key];
};

module.exports = new Pakker();
