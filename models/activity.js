module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Activity.associate = function(models) {
    Activity.belongsTo(models.User, {
      foreign_key: {
        allowNull: false
      }
    });
    Activity.belongsTo(models.Metric, {
      foreign_key: {
        allowNull: false
      }
    });
  };

  return Activity;
};
