const { render } = require('ejs');
const express = require('express');
const { getDb } = require('mongodb');
const mongodb = require('mongodb');

const db = require('../data/database');

// Importing the ObjectId type from mongodb to store ids in that form only
const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/notes-request');
});

router.get('/notes-request', async function (req, res) {
  const posts = await db
    .getDb()
    .collection('posts')
    .find({}, { title: 1, summary: 1, 'author.name': 1 })
    .toArray();

  res.render('notes-request-list', { posts: posts });
});

router.get('/new-request', async function (req, res) {
  const authors = await db.getDb().collection('authors').find().toArray();
  res.render('create-resource-request', { authors: authors });
});

router.post('/new-request', async function (req, res) {
  const authorId = new ObjectId(req.body.author);
  console.log(authorId); 
  const author = await db.getDb().collection('authors').findOne({ _id: authorId });
  const newPost = {
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.content,
    date: new Date(),
    author: {
      id: authorId,
      name: author.name,
      email: author.email
    }
  }
  //console.log(newPost);
  const result = await db.getDb().collection('posts').insertOne(newPost);
  console.log(result);
  res.redirect('/notes-request');
});

router.get('/notes-request/:id', async function (req, res) {
  const postNumber = req.params.id;
  // Note : Don't forget to convert postNumber to ObjectId or else it will fail
  const post = await db
    .getDb()
    .collection('posts')
    .findOne({ _id: new ObjectId(postNumber) }, { summary: 0 });

  if (!post) {
    return res.status(404).render('404');
  }

  post.humanReadableDate = post.date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  res.render('notes-request-detail', { post: post });
  post.date = post.date.toISOString();
});

// for posting the notes to a request
router.post('/notes-request/:id', async function (req, res) {

  const authorId = new ObjectId(req.body.author);
  console.log(authorId); 
  const author = await db.getDb().collection('authors').findOne({ _id: authorId });
  const newNotes = {
    Subject_Name: SubjectName,
    College_name: req.body.collegeName,
    Semester: req.body.sem,
    Name_Of_Uploader: req.body.nameOfUploader,
    Student_Year: studentYear,
    Year_Of_Upload: yearOfUpload,
    Notes_Upload: notesUpload,      
    };
  //console.log(newPost);
  const result = await db.getDb().collection('notes').insertOne(newNotes);
  console.log(result);
  res.redirect('/notes-request');
});


router.post('/notes-request/delete/:id', async function (req, res) {
  const postNumber = req.params.id;
  await db
    .getDb()
    .collection('posts')
    .deleteOne({ _id: new ObjectId(postNumber) });
    res.redirect('/notes-request');
});

module.exports = router;