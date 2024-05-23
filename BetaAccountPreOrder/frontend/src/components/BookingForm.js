import React, { useState } from 'react';

const BookingForm = () => {
    const [meetingTitle, setMeetingTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/meetings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ meetingTitle, date, time }),
        });

        if (response.ok) {
            setMessage('Meeting booked successfully!');
        } else {
            setMessage('Failed to book meeting. Please try again.');
        }
    };

    return (
        <div>
            <h2>Book a Meeting</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Meeting Title"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button type="submit">Book</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;
