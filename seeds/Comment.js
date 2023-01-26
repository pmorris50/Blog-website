const { Comment } = require('../models');

const commentData = [
    {
        "body": "This is a test comment for Blog 1 written by Stan Smith",

        "blog_id": "1",

        "user_id": 3
    },
    {

        "body": "This is a test comment for Blog 2 written by Hank Hill",

        "blog_id": "2",

        "user_id": 2
    },
    {

        "body": "This is a test comment for Blog 1 written by Bob Beltcher",

        "blog_id": "3",

        "user_id": 1
    }

    
]


const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;