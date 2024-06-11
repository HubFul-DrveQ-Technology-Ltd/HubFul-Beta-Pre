import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/transactions">Transactions</Link></li>
                <li><Link to="/recurring-transactions">Recurring Transactions</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/badges">Badges</Link></li>
            </ul>
        </div>
    );
};

export default UserDashboard;
