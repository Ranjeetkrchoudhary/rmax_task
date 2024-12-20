import React from "react";
import "./style.css";

const features = [
  "Seamless Onboarding",
  "Client Engagement",
  "Generate Report",
  "Revenue Growth",
];

const Features = () => (
  <section className="features">
    {features.map((feature, index) => (
      <div key={index} className="feature-card">
        {feature}
      </div>
    ))}
  </section>
);

export default Features;
