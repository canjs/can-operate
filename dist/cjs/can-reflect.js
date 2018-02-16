/*can-reflect@1.13.2#can-reflect*/
var functionReflections = require('./reflections/call/call.js');
var getSet = require('./reflections/get-set/get-set.js');
var observe = require('./reflections/observe/observe.js');
var shape = require('./reflections/shape/shape.js');
var type = require('./reflections/type/type.js');
var getName = require('./reflections/get-name/get-name.js');
var namespace = require('can-namespace');
var reflect = {};
[
    functionReflections,
    getSet,
    observe,
    shape,
    type,
    getName
].forEach(function (reflections) {
    for (var prop in reflections) {
        reflect[prop] = reflections[prop];
    }
});
require('./types/map.js');
require('./types/set.js');
module.exports = namespace.Reflect = reflect;