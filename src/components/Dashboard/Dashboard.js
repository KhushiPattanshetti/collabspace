// components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Documents from './Documents';
import Notes from './Notes';
import Tasks from './Tasks';
import Meetings from './Meetings';
import Chatbot from './Chatbot';
import Settings from './Settings';
import './Dashboard.css';

const Dashboard = ({ navigateTo, onLogout }) => {
  const [activeTab, setActiveTab] = useState('documents');

  const renderContent = () => {
    switch(activeTab) {
      case 'documents': return <Documents />;
      case 'notes': return <Notes />;
      case 'tasks': return <Tasks />;
      case 'meetings': return <Meetings />;
      case 'chatbot': return <Chatbot />;
      case 'settings': return <Settings />;
      default: return <Documents />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      
      <div className="dashboard-main">
        <Navbar />
        
        <div className="dashboard-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;