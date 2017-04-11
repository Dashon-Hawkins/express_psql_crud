var knex = require('./db/knex.js');


module.exports = {

  getMovies: function () {
    return knex.table('movies');
  },

  getOneMovie: function(id) {
    return knex.table('movies').where("id", id);
  },

  newMovie: function(newMovie, rating) {
    return knex.insert({
      director: newMovie.director,
      title: newMovie.title,
      rating: rating,
      description: newMovie.description
    }).table('movies').returning('id');
  },

  editMovie: function(id, editedMovie, rating) {
    return knex.table('movies').where('id', id).update({
      director: editedMovie.director,
      title: editedMovie.title,
      rating: rating,
      description: editedMovie.description
    });
  },

  deleteMovie: function(id) {
    return knex.table('movies').where('id', id).del();
  }

};