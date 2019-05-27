module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metric: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Goal.associate = function(models) {
    Goal.belongsTo(models.User, {
      foreign_key: {
        allowNull: false
      }
    });
  };

  return Goal;
};
