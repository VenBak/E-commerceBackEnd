const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get all the Categories
router.get('/', async (req, res) => {
  // find all categories
  // The Category will include its associated products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    // respond wit the data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a category based on a specficic id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // Will inclyde its associated products
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    // respond with the data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    // respond with the data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update the category where the id in the route matches the one in the data
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    // respond with the data
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Deletes from the data the category where the id matches the one in the route
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!locationData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    // respond wit the data
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
