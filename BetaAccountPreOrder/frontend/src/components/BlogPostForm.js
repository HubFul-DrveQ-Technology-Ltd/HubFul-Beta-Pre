import React, { useState } from 'react';

const BlogPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/blogPosts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            setMessage('Blog post created successfully!');
        } else {
            setMessage('Failed to create blog post. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BlogPostForm;
