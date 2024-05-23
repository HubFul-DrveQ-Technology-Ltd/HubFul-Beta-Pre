import React, { useEffect, useState } from 'react';

const UserBadges = ({ userId }) => {
    const [badges, setBadges] = useState([]);

    useEffect(() => {
        const fetchBadges = async () => {
            const response = await fetch(`/api/gamification/${userId}`);
            const data = await response.json();
            setBadges(data);
        };

        fetchBadges();
    }, [userId]);

    return (
        <div>
            <h2>User Badges</h2>
            <ul>
                {badges.map(badge => (
                    <li key={badge._id}>
                        <p>{badge.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserBadges;
