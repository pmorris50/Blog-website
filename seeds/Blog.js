const { Blog } = require('../models')

const blogData = [
    {
        "title": "Test One",

        "body": "Lorem ipsum dolor sit amet. Et provident alias et placeat consequatur quo eligendi quibusdam sit quisquam nesciunt est nobis sunt. Ad dolorem necessitatibus ut adipisci dolorem est veritatis dolores. Ut voluptatum consequatur qui possimus perferendis est voluptatem velit ut illum",

        "user_id": 1


  },
  {

    "title": "Test Two",

    "body": "Lorem ipsum dolor sit amet. Et provident alias et placeat consequatur quo eligendi quibusdam sit quisquam nesciunt est nobis sunt. Ad dolorem necessitatibus ut adipisci dolorem est veritatis dolores. Ut voluptatum consequatur qui possimus perferendis est voluptatem velit ut illum",

    "user_id": 2
  },
  {

    "title": "Test Three",

    "body": "Lorem ipsum dolor sit amet. Et provident alias et placeat consequatur quo eligendi quibusdam sit quisquam nesciunt est nobis sunt. Ad dolorem necessitatibus ut adipisci dolorem est veritatis dolores. Ut voluptatum consequatur qui possimus perferendis est voluptatem velit ut illum",

    "user_id": 3
  }
]

const seedBlog = () => Blog.bulkCreate(blogData);


module.exports = seedBlog;