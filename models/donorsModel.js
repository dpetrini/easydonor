/*
  Model
  Access layer for Mongo DB - using Mongojs
  Not in use in this project - here only for reference
*/

let debug   = require('debug')('donors:Model');

function donorsModel(mongo) {
  this.mongo = mongo;
}
donorsModel.prototype.find = function(query, callback) {
  this.mongo.collection('donors').find(query, callback);
};
donorsModel.prototype.findOne = function(_id, callback) {
  let query = { _id: this.mongo.ObjectId(_id) };
  this.mongo.collection('donors').findOne(query, callback);
};
donorsModel.prototype.create = function(data, callback) {
  debug("Insert data:" + data);
  this.mongo.collection('donors').insert(data, callback);
};
donorsModel.prototype.update = function(_id, data,callback) {
  let query = { _id: this.mongo.ObjectId(_id) };
  debug(" update:" + JSON.stringify(query));
  this.mongo.collection('donors').update(query, data, callback);
};
donorsModel.prototype.remove = function(_id, callback) {
  let query = { _id: this.mongo.ObjectId(_id) };
  this.mongo.collection('donors').remove(query, callback);
};
module.exports = function(mongo) {
  return new donorsModel(mongo);
};
