const express = require('express')
const Route = express.Router()
const formidable = require('express-formidable')
const postController = require('../../controllers/post/index')

Route.post('/createPost',postController.createPost);
Route.get('/get-all-post',postController.getAllPost);
Route.post('/uplaodImage', formidable({maxFileSize: 5*1024*1024}) ,postController.uploadFile);
Route.post('/edit-post/:_id' ,postController.editPost);
Route.post('/delete-post/:_id' ,postController.deletePost);
Route.post('/like-post/:_id', postController.likePost);
Route.post('/unlike-post/:_id', postController.unlikePost);

module.exports = Route;