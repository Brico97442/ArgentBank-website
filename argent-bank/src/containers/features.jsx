import React from "react";

import "../styles/index.css";
import chatIcon from "../img/icon-chat.png";
import moneyIcon from "../img/icon-money.png";
import securityIcon from "../img/icon-security.png";

const featureData = [
  {
    id: 1,
    icon: chatIcon,
    title: "You are our #1 priority",
    description:
      " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    alt: "Chat Icon",
  },
  {
    id: 2,
    icon: moneyIcon,
    title: "More savings means higher rates",
    description:
      " The more you save with us, the higher your interest rate will be!",
    alt: "Money Icon",
  },
  {
    id: 3,
    icon: securityIcon,
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
    alt: "Security Icon",
  },
];

export function Features() {
  return (
    <section className="features">
      {featureData.map((feature) => (
        <div key={feature.id} className="feature-item">
          <img src={feature.icon} alt={feature.alt} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
export default Features;
