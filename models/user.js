module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      },
      unique: {
        args: true,
        msg: "Username already in use!"
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Activity, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.Goal, {
      onDelete: "cascade"
    });
  };

  return User;
};
