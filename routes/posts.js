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


router.get('/:id', async (req, res)=>{
    try {
    const post = await Post.findById(req.params.id)
    res.json(post)
    } catch (error) {
    res.json({message: error})
    }
} )

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

router.delete('/:id', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.id})
        res.json(removedPost)
    } catch(error) {
        res.json({message: error})
    }
})

router.patch('/:id', async(req, res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.id},
            {$set: { title: req.body.title}}
        )
        res.json(updatedPost)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router