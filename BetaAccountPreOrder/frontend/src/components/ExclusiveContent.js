import React, { useEffect, useState } from 'react';

const ExclusiveContent = () => {
    const [contents, setContents] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchContents = async () => {
            const response = await fetch('/api/exclusive-content');
            const data = await response.json();
            setContents(data);
        };

        fetchContents();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/exclusive-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            setMessage('Content created successfully!');
        } else {
            setMessage('Failed to create content. Please try again.');
        }
    };

    return (
        <div>
            <h2>Exclusive Content</h2>
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
            <h3>Existing Contents</h3>
            <ul>
                {contents.map(content => (
                    <li key={content._id}>
                        <h4>{content.title}</h4>
                        <p>{content.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExclusiveContent;
