'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  return app.model.define('Test', {
    user_id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    tableName: 'user',
    timestamps: false,
  });
};
