const {Schema, model} = require('../connection');

const myschema = new Schema({
    // key value pairs
    items : Array,
    createdAt: Date,
    name : String,
    address : String,
});

module.exports = model( 'ordersData', myschema);