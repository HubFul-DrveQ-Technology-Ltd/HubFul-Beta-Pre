import React, { useEffect, useState } from 'react';
import AdminPreOrders from './AdminPreOrders';

const AdminDashboard = () => {
    const [dashboardData, setDashboardData] = useState({ totalUsers: 0, verifiedUsers: 0, totalPreOrders: 0 });

    useEffect(() => {
        const fetchDashboardData = async () => {
            const response = await fetch('/admin/dashboard');
            const data = await response.json();
            setDashboardData(data);
        };

        fetchDashboardData();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Total Users: {dashboardData.totalUsers}</p>
            <p>Verified Users: {dashboardData.verifiedUsers}</p>
            <p>Total Pre-Orders: {dashboardData.totalPreOrders}</p>
            <AdminPreOrders />
        </div>
    );
};

export default AdminDashboard;
