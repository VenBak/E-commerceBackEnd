const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our product tag model
class ProductTag extends Model {}

// create fields/columns for product tag model
// 3 columbs, id, product id and tag id
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag'
  }
);

module.exports = ProductTag;