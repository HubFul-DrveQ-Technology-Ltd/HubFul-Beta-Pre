import React, { useEffect, useState } from 'react';

const Forum = () => {
    const [forums, setForums] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchForums = async () => {
            const response = await fetch('/api/forum');
            const data = await response.json();
            setForums(data);
        };

        fetchForums();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/forum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            setMessage('Forum post created successfully!');
        } else {
            setMessage('Failed to create forum post. Please try again.');
        }
    };

    return (
        <div>
            <h2>Forum</h2>
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
            <h3>Existing Forums</h3>
            <ul>
                {forums.map(forum => (
                    <li key={forum._id}>
                        <h4>{forum.title}</h4>
                        <p>{forum.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forum;
