import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import axios from 'axios';

const AdminPage = () => {
    const [preOrders, setPreOrders] = useState([]);

    useEffect(() => {
        const fetchPreOrders = async () => {
            const response = await axios.get('http://localhost:5000/api/preorders');
            setPreOrders(response.data);
        };
        fetchPreOrders();
    }, []);


    return (
        <div className="admin-page">
            <h2>Admin Dashboard</h2>
            <div className="overview">
                <p>Total Pre-Orders: {preOrders.length}</p>
                <p>Recent Orders: {preOrders.slice(-5).map((order) => (
                    <div key={order._id}>
                        <p>{order.name}</p>
                        <p>{order.email}</p>
                        <p>{order.plan}</p>
                    </div>
                ))}</p>
            </div>
            <div className="manage-preorders">
                <button>Add Pre-Order</button>
                <button>Remove Pre-Order</button>
                <button>Edit Pre-Order</button>
            </div>
            <div className="email-list">
                <h3>Email Groups</h3>
                <button>Send Email Updates</button>
            </div>
        </div>
    );
};

export default AdminPage;
