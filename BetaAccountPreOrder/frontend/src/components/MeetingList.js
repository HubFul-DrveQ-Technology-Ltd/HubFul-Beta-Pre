import React, { useEffect, useState } from 'react';

const MeetingList = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        const fetchMeetings = async () => {
            const response = await fetch('/api/meetings');
            const data = await response.json();
            setMeetings(data);
        };

        fetchMeetings();
    }, []);

    return (
        <div>
            <h2>Meetings</h2>
            <ul>
                {meetings.map(meeting => (
                    <li key={meeting._id}>
                        <h3>{meeting.meetingTitle}</h3>
                        <p>Date: {meeting.date}</p>
                        <p>Time: {meeting.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeetingList;
