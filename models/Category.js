const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our category model
class Category extends Model {}

// create fields/columns for category model
// 2 columns one is id and the other is category name
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category;
