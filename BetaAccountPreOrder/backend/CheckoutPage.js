import React, { useState } from 'react';
import './CheckoutPage.css';
import axios from 'axios';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        plan: '',
        price: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/preorder', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Pre-order failed!');
        }
    };


    return (
        <div className="checkout-page">
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    Plan:
                    <select name="plan" value={formData.plan} onChange={handleChange}>
                        <option value="Lite">HubFul Lite</option>
                        <option value="Plus">HubFul Plus</option>
                        <option value="Premium">HubFul Premium</option>
                        <option value="Unlimited">HubFul Unlimited</option>
                    </select>
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
