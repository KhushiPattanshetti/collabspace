// components/Dashboard/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'notes', label: 'Notes', icon: '📝' },
    { id: 'tasks', label: 'Tasks', icon: '✅' },
    { id: 'meetings', label: 'Meetings', icon: '📅' },
    { id: 'chatbot', label: 'AI Assistant', icon: '🤖' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>CollabSpace</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                className={activeTab === item.id ? 'active' : ''}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button onClick={onLogout} className="logout-btn">
          <span className="menu-icon">🚪</span>
          <span className="menu-label">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;