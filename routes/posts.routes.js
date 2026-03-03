const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// Criar postagem
router.post('/posts', postsController.createPost);

// Buscar postagem
router.get('/posts/:id', postsController.getPostById);

// Excluir postagem
router.delete('/posts/:id', postsController.deletePost);

// Curtir / Descurtir
router.post('/posts/:id/like', postsController.toggleLike);

// Responder postagem
router.post('/posts/:id/reply', postsController.replyPost);

// Feed
router.get('/feed', postsController.getFeed);

module.exports = router;