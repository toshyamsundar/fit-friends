module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define("Activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    metric: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Activity;
};
