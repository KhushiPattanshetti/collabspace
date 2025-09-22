// components/Home/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform transformed how our remote team collaborates. The annotation features are incredible!",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp"
    },
    {
      quote: "The AI assistant has saved us countless hours in meeting planning and documentation.",
      author: "Michael Chen",
      role: "CTO at StartupHub"
    },
    {
      quote: "Finally, a tool that combines all our collaboration needs in one intuitive interface.",
      author: "Jessica Williams",
      role: "Design Lead at CreativeCo"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Teams Are Saying</h2>
        <p className="section-subtitle">Join thousands of satisfied teams worldwide</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;