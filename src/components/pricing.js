import React from "react";
import "./style.css";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is RMax?",
      answer: "RMax is a SaaS platform/ecosystem that helps businesses manage and grow efficiently."
    },
    {
      question: "How does it work?",
      answer: "It provides tools for communication, CRM, AI marketing, and much more to simplify management."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing starts at $17/month with flexible plans to suit your needs."
    }
  ];

  return (
    <div className="pricing-page">
      {/* Top Section */}
      <div className="pricing-header">
        <h1>Flexible Plans, Transparent Pricing</h1>
        <p>Find the Perfect Fit for You</p>
        <p className="trial">30-day free trial with money-back guarantee.</p>
      </div>

      {/* Pricing Table */}
      <div className="pricing-table">
        <h2>Compare our plans</h2>
        <div className="pricing-grid">
          {/* Features Column */}
          <div className="pricing-column features">
            <h3>Features</h3>
            <p>Users</p>
            <p>Branches</p>
            <p>Courses</p>
            <p>Max. Students Allowed</p>
            <p>Communication</p>
            <p>Bulk Updates</p>
            <p>User Roles</p>
          </div>

          {/* Starter Plan */}
          <div className="pricing-column">
            <h3>Starter</h3>
            <p>$17/month, billed monthly</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>25</p>
            <p>25</p>
            <p>25</p>
            <p>25</p>
            <button>Get Started</button>
            <p className="note">No credit card required</p>
          </div>

          {/* Premium Plan */}
          <div className="pricing-column">
            <h3>Premium</h3>
            <p>$88/month, billed monthly</p>
            <p>15</p>
            <p>10</p>
            <p>15/branch</p>
            <p>500</p>
            <p>Yes</p>
            <p>Yes</p>
            <p>Yes</p>
            <button>Get Started</button>
            <p className="note">No credit card required</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our services and features.</p>
        <p>For more details, contact our support team.</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <p className="support">
          Haven’t got your answer? <a href="/contact">Contact our support now</a>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
