// const Product = require('./Product');
// const Tag = require('./Tag');
// const ProductTag = require('./ProductTag');
// const Category = require('./Category');


// // Define a Driver as having one License to create a foreign key in the `license` table
// ProductTag.hasOne(Product, {
//   foreignKey: 'product_id',
//   // When we delete a Driver, make sure to also delete the associated License.
//   onDelete: 'CASCADE',
// });

// ProductTag.hasOne(Tag, {
//     foreignKey: 'tag_id',
//     // When we delete a Driver, make sure to also delete the associated License.
//     onDelete: 'CASCADE',
//   });

// Product.belongsTo(Category)

// Category.hasMany(Product)

// Product.belongsToMany(Tag)

// Tag.belongsToMany(Product)

// module.exports = { Category, Product, Tag, ProductTag }
