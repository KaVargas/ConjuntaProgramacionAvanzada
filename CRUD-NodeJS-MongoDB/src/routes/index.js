const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');
const Task = require('../models/task');

router.get('/', async (req, res) => {
  const listBooks = await Book.find();
  const listAuthors = await Author.find();
  res.render('index', {
    listBooks
  });
});

router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/');
});

router.post('/addAuthor', async (req, res, next) => {
  const task = new Author(req.body);
  await task.save();
  res.redirect('/');
});

router.post('/addBook', async (req, res, next) => {
  const task = new Book(req.body);
  await task.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Book.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
