exports.seed = function(knex) {
  await knex('projects').insert([
    {
      project_name: "Preparation H",
      project_description: "Description H",
      project_completed: 1
    },

    {
      project_name: "Preparation I",
      project_description: "Description I",
      project_completed: 1
    },

    {
      project_name: "Preparation J",
      project_description: "Description J",
      project_completed: 1
    },

    {
      project_name: "Preparation K",
      project_description: "Description K",
      project_completed: 1
    }
  ])
};
