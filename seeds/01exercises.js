
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function() {
      const exercise = [{
          muscle_group: 'abs',
          'intensity_scale_1-5': 1,
          name: 'crunches'
        }, {
          muscle_group: 'biceps',
          'intensity_scale_1-5': 4,
          name: 'curls'
        }, {
          muscle_group: 'lats',
          'intensity_scale_1-5': 3,
          name: 'overhead pulldown'
      }];

      return knex('exercises').insert(exercise);

    });
};
