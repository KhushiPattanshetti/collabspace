// components/Home/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📄',
      title: 'Upload & Annotate PDFs',
      description: 'Upload PDF documents and annotate them together with your team in real-time.'
    },
    {
      icon: '💬',
      title: 'Real-time Collaboration',
      description: 'Highlight text and add shared notes that everyone can see and contribute to.'
    },
    {
      icon: '📅',
      title: 'Schedule Meetings',
      description: 'Integrate with Google Meet and Zoom to schedule and join meetings directly.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor project progress with intuitive dashboards and task tracking.'
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Get help with project planning and summarization from our AI chatbot.'
    },
    {
      icon: '👥',
      title: 'Team Management',
      description: 'Easily add team members and manage permissions for your projects.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Powerful Features for Team Collaboration</h2>
        <p className="section-subtitle">Everything you need to work together effectively</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;