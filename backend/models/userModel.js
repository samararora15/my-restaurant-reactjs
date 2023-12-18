const {Schema, model} = require('../connection');

const myschema = new Schema({
    // key value pairs
    name : String,
    email: String,
    mobile: String,
    password : String
});

module.exports = model( 'usersData', myschema);