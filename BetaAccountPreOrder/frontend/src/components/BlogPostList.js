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

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogPosts.map(post => (
                    <li key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPostList;
