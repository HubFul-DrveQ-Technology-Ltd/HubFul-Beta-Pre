import React, { useEffect, useState } from 'react';

const CurrencySelector = () => {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState('');

    useEffect(() => {
        const fetchCurrencies = async () => {
            const response = await fetch('/api/currencies');
            const data = await response.json();
            setCurrencies(data);
        };

        fetchCurrencies();
    }, []);

    const handleChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    return (
        <div>
            <h2>Select Currency</h2>
            <select value={selectedCurrency} onChange={handleChange}>
                {currencies.map(currency => (
                    <option key={currency._id} value={currency._id}>
                        {currency.name} ({currency.symbol})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
