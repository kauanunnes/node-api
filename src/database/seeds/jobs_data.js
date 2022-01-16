
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {name: 'System Analyst', sector: 1},
        {name: 'Sales Manager', sector: 2},
        {name: 'Social Media Creator', sector: 3}
      ]);
    });
};
