import React, { useEffect, useState } from 'react';

const AuditLogs = () => {
    const [auditLogs, setAuditLogs] = useState([]);

    useEffect(() => {
        const fetchAuditLogs = async () => {
            const response = await fetch('/api/audit');
            const data = await response.json();
            setAuditLogs(data);
        };

        fetchAuditLogs();
    }, []);

    return (
        <div>
            <h2>Audit Logs</h2>
            <ul>
                {auditLogs.map(log => (
                    <li key={log._id}>
                        <p>Action: {log.action}</p>
                        <p>Date: {new Date(log.date).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuditLogs;
