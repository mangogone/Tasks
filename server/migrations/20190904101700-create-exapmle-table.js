module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: [0, 100],
        },
      },
      experience:{ 
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue: 0,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: [0, 100],

      },
      description:{
        type: Sequelize.TEXT,
        allowNull:false,

      },
      owner_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,

      },
      deadline_date:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,

      },
      status:{
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: {
          len: [0, 100],
        },

      }
     
    });
  },
  down: (queryInterface, Sequelize) => 
  { return queryInterface.dropTable('examples', { transaction: t });}
  }

