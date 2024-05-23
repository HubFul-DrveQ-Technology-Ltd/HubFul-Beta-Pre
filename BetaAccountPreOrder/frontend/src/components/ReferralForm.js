import React, { useState } from 'react';

const ReferralForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/referrals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setMessage('Referral sent successfully!');
        } else {
            setMessage('Failed to send referral. Please try again.');
        }
    };

    return (
        <div>
            <h2>Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Friend's Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Referral</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ReferralForm;
