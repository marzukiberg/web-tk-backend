const { model, Schema } = require('mongoose');

const About = model('About', new Schema({
    gambar: 'string',
    
}));

module.exports = About;
