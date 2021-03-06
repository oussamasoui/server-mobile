'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Followers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Followers.belongsTo(models.User, {
        as: 'following',
        foreignKey: 'followedId',
        onDelete: 'CASCADE'
      });
      Followers.belongsTo(models.User, {
        as: 'followers',
        foreignKey: 'followerId',
        onDelete: 'CASCADE'
      });
    }
  };
  Followers.init({
    followerId: DataTypes.INTEGER,
    followedId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Followers',
  });
  return Followers;
};