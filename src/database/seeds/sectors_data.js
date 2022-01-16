
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sectors').del()
    .then(function () {
      // Inserts seed entries
      return knex('sectors').insert([
        {name: 'IT'},
        {name: 'Sales'},
        {name: 'Marketing'}
      ]);
    });
};
