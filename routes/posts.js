const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})

router.post('/', (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(error => {
        res.json({ message: error})
    })
})

module.exports = router