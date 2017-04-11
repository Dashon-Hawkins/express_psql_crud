var express = require('express');
var router = express.Router();
var queries = require("../queries");


router.get('/movies', function(req, res, next) {
  queries.getMovies().then(function(movies) {
    res.render('movies/index', {movies: movies});
  });
});


router.get('/movie/new', function(req, res, next) {
  res.render('movies/new');
});

router.post('/movies', function(req, res, next) {
  var newMovie = req.body;
  var rating = parseInt(newMovie.rating);
  queries.newMovie(newMovie, rating).then(function() {
  res.redirect('/movies');
  });
});

router.get('/movie/:id', function(req, res, next) {
  var id = req.params.id;
  queries.getOneMovie(id).then(function(movie) {
    res.render('movies/show', {movie: movie[0]})
  });
});

router.get('/movie/edit/:id', function(req, res, next) {
  var id = req.params.id;
  queries.getOneMovie(id).then(function(movie) {
    res.render('movies/edit', {movie: movie[0]})
  })
});

router.post('/movie/:id', function(req, res, next) {
  var id = req.params.id;
  var editedMovie = req.body;
  var rating = parseInt(editedMovie.rating);
  queries.editMovie(id, editedMovie, rating)
    .then(queries.getOneMovie(id)
      .then(function(movie) {
        res.render('movies/show', {movie: movie[0]});
  }));
});

router.post('/movie/delete/:id', function(req, res, next) {
  var id = req.params.id;
  queries.deleteMovie(id).then(function() {
    res.redirect('/movies');
  });
});

module.exports = router;




