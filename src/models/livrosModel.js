const mongoose = require('mongoose');

const Livro = mongoose.model('Livro', {
    titulo: String,
    autor: String,
    ano: String,
    genero: String,
})

module.exports = Livro