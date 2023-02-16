const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our tag model
class Tag extends Model {}

// create fields/columns for tag model
// 2 columns id and tag name
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
);

module.exports = Tag;