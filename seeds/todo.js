exports.seed = function(knex, Promise) {
  return knex('todo')
    .truncate()
    .then(function() {
      const todos = [
        {
          title: 'Build a CRUD app',
          priority: 1,
          date: new Date()
        },
        {
          title: 'understand pg',
          priority: 1,
          date: new Date()
        },
        {
          title: 'use pg for daisy app',
          priority: 1,
          date: new Date()
        },
        {
          title: 'understand auth0 with this app, daisy app, and labs app',
          priority: 1,
          date: new Date()
        },
        {
          title: 'celebrate',
          priority: 3,
          date: new Date()
        }
      ];
      return knex('todo').insert(todos);
    });
};
