const BlogPost = require('../models/BlogPost');

exports.createBlogPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlogPost = new BlogPost({ title, content });
        await newBlogPost.save();
        res.status(201).send('Blog post created');
    } catch (error) {
        res.status(400).send('Error creating blog post');
    }
};

exports.getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find({});
        res.json(blogPosts);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.deleteBlogPost = async (req, res) => {
    try {
        await BlogPost.findByIdAndDelete(req.params.id);
        res.status(200).send('Blog post deleted');
    } catch (error) {
        res.status(500).send('Server error');
    }
};
