import React, { useState } from 'react';

const FeedbackProgram = () => {
    const [feedback, setFeedback] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/feedback-program', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        });

        if (response.ok) {
            setMessage('Feedback submitted successfully!');
        } else {
            setMessage('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div>
            <h2>Feedback Program</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FeedbackProgram;
