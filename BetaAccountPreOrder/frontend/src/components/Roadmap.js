import React, { useEffect, useState } from 'react';

const Roadmap = () => {
    const [roadmaps, setRoadmaps] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchRoadmaps = async () => {
            const response = await fetch('/api/roadmap');
            const data = await response.json();
            setRoadmaps(data);
        };

        fetchRoadmaps();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/roadmap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, status }),
        });

        if (response.ok) {
            setMessage('Roadmap created successfully!');
        } else {
            setMessage('Failed to create roadmap. Please try again.');
        }
    };

    return (
        <div>
            <h2>Roadmap</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                />
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
            <h3>Existing Roadmaps</h3>
            <ul>
                {roadmaps.map(roadmap => (
                    <li key={roadmap._id}>
                        <h4>{roadmap.title}</h4>
                        <p>{roadmap.description}</p>
                        <p>Status: {roadmap.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Roadmap;
