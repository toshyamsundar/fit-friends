module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Goal.associate = function(models) {
    Goal.belongsTo(models.User, {
      foreign_key: {
        allowNull: false
      }
    });
    Goal.belongsTo(models.Metric, {
      foreign_key: {
        allowNull: false
      }
    });
  };

  return Goal;
};
