// Import all of the models
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Category = require('./Category');

// Product belongs to category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

// Category has many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Product belongs to many tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tag belongs to many products
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

module.exports = { Category, Product, Tag, ProductTag }
