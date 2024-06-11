import React, { useEffect, useState } from 'react';

const RecurringTransactions = () => {
    const [recurringTransactions, setRecurringTransactions] = useState([]);

    useEffect(() => {
        const fetchRecurringTransactions = async () => {
            const response = await fetch('/api/recurring-transactions');
            const data = await response.json();
            setRecurringTransactions(data);
        };

        fetchRecurringTransactions();
    }, []);

    return (
        <div>
            <h2>Recurring Transactions</h2>
            <ul>
                {recurringTransactions.map(transaction => (
                    <li key={transaction._id}>
                        <p>Amount: ${transaction.amount}</p>
                        <p>Interval: {transaction.interval}</p>
                        <p>Description: {transaction.description}</p>
                        <p>Start Date: {new Date(transaction.startDate).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecurringTransactions;
