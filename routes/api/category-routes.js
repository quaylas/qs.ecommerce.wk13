const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [{
      model: Product
    }]
  })
  .then(dbCategories => {
    res.json(dbCategories);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{model: Product}]
  })
  .then(dbCategory => {
    res.json(dbCategory);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(dbCategory => {
    res.json(dbCategory);
  })
  .catch((err)=>{
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  }).then(dbCategory =>{
    res.json(dbCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;
