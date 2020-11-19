const express = require('express');
const router = express.Router();
const Comments = require('../Models/CommentSchema.js');
const user = require('../Models/UserSchema.js');


router.get('/', async(req, res) => {
    await Comments.findAll().then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})

router.get('/:id', async(req, res) => {
    await Comments.findByPk(req.params.id).then((comments) => res.json(comments))
        .catch((err) => console.log(err))
})

router.post('/addComment', async(req, res) => {
    await Comments.create({
        
            IDPost: req.body.IDPost,
            UserId: req.body.UserId,
            Content: req.body.Content,
            timestamp: req.body.timestamp,
        })
        .then((user) => res.json(user))
        .catch((err) => console.log(err))
})

router.put('/:id', async(req, res) => {
    Comments.findByPk(req.params.id).then(() => {
        comments.update({
            Content: req.body.Content,
            timestamp: req.body.timestamp,

            }).then((comments) => {
                res.json(comments);
            });
        })
        .catch((err) => console.log(err))
})

router.delete('/:id', async(req, res) => {
    await Comments.findByPk(req.params.id).then((comments) => {
            comments.destroy();
        }).then(() => {
            res.json("deleted");
        })
        .catch((err) => console.log(err))
});

router.delete('/', async(req, res) => {
    await Comments.destroy({ where: {}, truncate: true }).then(() => res.json("cleared"))
        .catch((err) => console.log(err))
});


module.exports = router;