const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
     try {
        const tagData =Tag.findAll({
            include: [
              { model: Product, through: ProductTag }
            ]
        })
        // respond with the data
        res.status(200).json(tagData);
     } catch (error) {
        res.status(500).json(err);
     }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
    try {
        const tagData = await Tag.findOne({
            where: {
              id: req.params.id,
            },
            include: [
                { model: Product, through: ProductTag, }
            ]
        })
        // respond with the data
        res.status(200).json(tagData)
    } catch (error) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  // // create a new tag
  // try {
  //   const tagData = await Tag.Create(req.body)
  //   res.status(200).json(tagData)
  // } catch (error) {
  //   res.status(404).json(err);
  // }
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        }
  })
  // respond with the data
  res.status(200).json(tagData)
  } catch (error) {
    res.status(404).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        }
      })
      // respond with the data
      res.status(200).json(tagData)
  } catch (error) {
    res.status(404).json(err);
  }
});

module.exports = router;
