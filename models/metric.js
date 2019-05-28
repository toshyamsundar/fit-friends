module.exports = function(sequelize, DataTypes) {
  var Metric = sequelize.define("Metric", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Metric.associate = function(models) {
    Metric.hasMany(models.Activity);
  };

  Metric.associate = function(models) {
    Metric.hasMany(models.Goal);
  };

  return Metric;
};
