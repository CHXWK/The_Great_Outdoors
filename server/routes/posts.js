import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

//http://localhost:5000/posts
router.get('/', getPosts);

router.post('/', createPost);

//used to update existing documents
router.patch('/:id', updatePost )

router.delete('/:id', deletePost);

router.patch('/:id/likepost', likePost)

export default router;
