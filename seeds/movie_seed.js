
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('movies').del(),

    // Inserts seed entries
    knex('movies').insert(
      {
        director: 'Cho Mar Lwe',
        title: 'Clash of the Titans',
        rating: 7,
        description: 'An action movie where lots of stuff happens.'
      }),
    knex('movies').insert(
      {
        director: 'Ibro Soumah',
        title: 'Back to gSchool',
        rating: 3,
        description: 'A woman goes back to school to become a web developer so she and her husband can travel the world while they work remotely.'
      }),
    knex('movies').insert(
      {
        director: 'Amerance Ndyishimiye',
        title: 'CRUD Assessment',
        rating: 5,
        description: 'Students in gSchool have to prove they can make a crud app.'
      })
  );
};


