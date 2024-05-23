import React, { useEffect, useState } from 'react';

const BlogPostList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch('/api/blogPosts');
            const data = await response.json();
            setBlogPosts(data);
        };

        fetchBlogPosts();
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`/api/blogPosts/${id}`, { method: 'DELETE' });
        if (response.ok) {
            setBlogPosts(blogPosts.filter(post => post._id !== id));
        }
    };

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogPosts.map(post => (
                    <li key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPostList;
