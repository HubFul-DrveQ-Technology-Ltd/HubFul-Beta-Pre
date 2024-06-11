import React, { useEffect, useState } from 'react';

const AdminPreOrders = () => {
    const [preOrders, setPreOrders] = useState([]);

    useEffect(() => {
        const fetchPreOrders = async () => {
            const response = await fetch('/admin/preorders');
            const data = await response.json();
            setPreOrders(data);
        };

        fetchPreOrders();
    }, []);

    return (
        <div>
            <h2>Beta Pre-Orders</h2>
            <ul>
                {preOrders.map(preOrder => (
                    <li key={preOrder._id}>
                        <p>Username: {preOrder.username}</p>
                        <p>Email: {preOrder.email}</p>
                        <p>Date: {new Date(preOrder.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPreOrders;
