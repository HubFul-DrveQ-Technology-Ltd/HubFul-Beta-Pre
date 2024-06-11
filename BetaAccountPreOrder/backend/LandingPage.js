import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header>
                <img src="/path-to-logo.png" alt="HubFul Logo" />
                <nav>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <section className="hero">
                <h1>Join the HubFul Beta Program</h1>
                <p>Experience the future of social commerce</p>
                <button>Pre-Order Now</button>
            </section>
            <section id="features">
                <h2>Features</h2>
                <div className="feature-box">
                    <h3>Innovative Social Commerce</h3>
                </div>
                <div className="feature-box">
                    <h3>Easy Integration</h3>
                </div>
                <div className="feature-box">
                    <h3>Secure and Reliable</h3>
                </div>
            </section>
            <section id="pricing">
                <h2>Pricing</h2>
                <div className="pricing-box">
                    <h3>HubFul Lite (Free Limited Plan)</h3>
                    <p>$0/month</p>
                </div>
                <div className="pricing-box">
                    <h3>HubFul Plus</h3>
                    <p>$10/month</p>
                </div>
                <div className="pricing-box">
                    <h3>HubFul Premium</h3>
                    <p>$30/month</p>
                </div>
                <div className="pricing-box">
                    <h3>HubFul Unlimited</h3>
                    <p>$60/month</p>
                </div>
            </section>
            <footer>
                <p>Contact Information</p>
                <p>Social Media Links</p>
            </footer>
        </div>
    );
};

export default LandingPage;
