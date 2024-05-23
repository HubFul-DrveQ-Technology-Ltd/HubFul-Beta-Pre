import React, { useState, useEffect } from 'react';

const EmailTemplateManager = () => {
    const [templates, setTemplates] = useState([]);
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchTemplates = async () => {
            const response = await fetch('/api/email-templates');
            const data = await response.json();
            setTemplates(data);
        };

        fetchTemplates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/email-templates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, subject, body }),
        });

        if (response.ok) {
            setMessage('Email template created successfully!');
        } else {
            setMessage('Failed to create email template. Please try again.');
        }
    };

    return (
        <div>
            <h2>Email Template Manager</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Template Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
            <h3>Existing Templates</h3>
            <ul>
                {templates.map(template => (
                    <li key={template._id}>
                        <h4>{template.name}</h4>
                        <p>Subject: {template.subject}</p>
                        <p>Body: {template.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailTemplateManager;
