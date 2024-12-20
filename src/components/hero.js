import React from "react";
import "./style.css";
import { images} from "../assets/image";

const Hero = () => (
  <>
    {/* Hero Section */}
    <section className="hero">
      <h1>
        Maximize Your Impact <span>Business with RMax</span>
      </h1>
      <p>
        Enhance your business with RMax's all-in-one platform—streamlining client
        engagement, automating workflows, and fueling growth.
      </p>
      <div className="hero-buttons">
        <button className="get-started">Get Started</button>
        <button className="book-demo">Book A Demo</button>
      </div>
    </section>
    {/* Onboard Business Section */}
    <div className="onboard-section">
      <h2>Onboard business in 3 simple steps</h2>
      <p>Quick assisted onboarding with 30-day free trial. No credit card needed.</p>
      <div className="steps-container">
        <div className="step">
          <div className="icon-container">
            <img
              src="/path-to-icon1.png"
              alt="Claim Your Preset Profile"
              className="step-icon"
            />
          </div>
          <h3>Claim your preset profile</h3>
          <p>
            Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.
          </p>
        </div>
        <div className="step">
          <div className="icon-container">
            <img
              src="/path-to-icon2.png"
              alt="Add Services"
              className="step-icon"
            />
          </div>
          <h3>Add services</h3>
          <p>
            Make use of multiple scheduling, pricing options to add services. Choose
            from pre-created scheduling templates.
          </p>
        </div>
        <div className="step">
          <div className="icon-container">
            <img
              src="/path-to-icon3.png"
              alt="Build Website"
              className="step-icon"
            />
          </div>
          <h3>Build Website</h3>
          <p>
            Build your online storefront your way, seamlessly integrating all services
            for a cohesive and efficient client experience.
          </p>
        </div>
      </div>
    </div>
    {/* RMax Section */}
    <div className="why-rmax-section">
      <h2>Why RMax?</h2>
      <p>
        RMax is designed to simplify and transform the way service businesses operate. 
        From onboarding, scheduling, and billing to client management, payments, and growth, 
        RMax integrates everything in one easy-to-use platform connecting all the stakeholders.
      </p>
      <div className="features-grid">
    
        <div className="feature-card">
          <h3>Scheduling</h3>
          <p>Manage appointments, classes, and events with ease.</p>
          <a href="#details">View details →</a>
        </div>
        <div className="feature-card">
          <h3>Client Management & CRM</h3>
          <p>Keep track of customer data, preferences, and interactions.</p>
          <a href="#details">View details →</a>
        </div>
        <div className="feature-card">
          <h3>AI Powered Insights</h3>
          <p>Know exactly what is happening in your business and get actionable insights.</p>
          <a href="#details">View details →</a>
        </div>
        <div className="feature-card">
          <h3>Billing & Payments</h3>
          <p>Streamline invoicing and payments with advanced workflows.</p>
          <a href="#details">View details →</a>
        </div>
        <div className="feature-card">
          <h3>Marketing & Engagement Tools</h3>
          <p>Boost client retention and grow your business with integrated tools.</p>
          <a href="#details">View details →</a>
        </div>
        <div className="feature-card">
          <h3>Custom Branded Website</h3>
          <p>Qest’s Custom Branded Website Builder allows you to create a fully personalized look.</p>
          <a href="#details">View details →</a>
        </div>
      </div>
    </div>
    {/* Empowering Service Providers Section */}
    <div className="industries-section">
      <h2>Empowering Service Providers Across Industries</h2>
      <p>
        Whether you're in sports, education, wellness, household services, or niche markets, our technology
        simplifies your business operations, making it easier for you to focus on what you do best.
      </p>
      <div className="industries-carousel">
      
        <div className="industry-card">
          <img src={images.sports} alt="About the Sports" />
          <h3>Sports</h3>
          <p>From fitness studios to sports academies, RMax empowers sports businesses.</p>
          <a href="#sports">Know more →</a>
        </div>
       
        <div className="industry-card">
          <img src={images.wellness} alt="About the Health"/>
          <h3>Healthcare & Wellness</h3>
          <p>Health and wellness service providers—from yoga instructors and gyms.</p>
          <a href="#healthcare">Know more →</a>
        </div>
       
        <div className="industry-card">
          <img src={images.learning} alt="About the learning"/>
          <h3>Learning Activities</h3>
          <p>
            Tutors, educators, and learning centers—from music schools to art studios.
          </p>
          <a href="#education">Know more →</a>
        </div>
      </div>
    </div>
    <section className="pricing-section">
      <h2>Choose Plan That's Right For You</h2>
      <p>
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <br />
        <span className="highlight">30-day free trial in a button</span>
      </p>
      <p>
        Running a <strong>Growth Business or Enterprise?</strong> Let's connect —
        <button className="talk-to-sales">Talk to Sales</button>
      </p>
      <div className="toggle-billing">
        <span>Monthly</span>
        <input type="checkbox" id="billing-toggle" />
        <label htmlFor="billing-toggle"></label>
        <span>Yearly <span className="save">SAVE 25%</span></span>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">$17 <span>/month</span></p>
          <ul>
            <li>✔ Commercial License</li>
            <li>✔ 100+ HTML UI Elements</li>
            <li>✔ Unlimited Domain Support</li>
            <li>✘ 6 Month Premium Support</li>
            <li>✘ Life Time Updates</li>
          </ul>
          <button className="get-started">Get Started</button>
          <p>No credit card required</p>
        </div>
        <div className="pricing-card premium">
          <h3>Premium</h3>
          <p className="price">$88 <span>/month</span></p>
          <ul>
            <li>✔ Commercial License</li>
            <li>✔ 100+ HTML UI Elements</li>
            <li>✔ Unlimited Domain Support</li>
            <li>✔ 6 Month Premium Support</li>
            <li>✔ Life Time Updates</li>
          </ul>
          <button className="get-started">Get Started</button>
          <p>No credit card required</p>
        </div>
      </div>
      <a href="#in-depth-differences" className="details-link">
        Explore In-Depth Differences →
      </a>
    </section>
    <section className="business-on-the-go">
      <h2>Manage Your Business On the Go</h2>
      <p>
        With free Business Mobile App, you can manage your entire service business
        from anywhere. Stay connected and stay in control, no matter where your
        day takes you.
      </p>
      <div className="app-buttons">
        <button className="app-store">
          <img src="/path-to-appstore-logo.png" alt="App Store" />
          App Store
        </button>
        <button className="google-play">
          <img src="/path-to-googleplay-logo.png" alt="Google Play" />
          Google Play
        </button>
      </div>
    </section>
  </>
);

export default Hero;
