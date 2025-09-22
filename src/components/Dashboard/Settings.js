// components/Dashboard/Settings.js
import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="section-header">
        <h2>Settings</h2>
      </div>
      
      <div className="settings-content">
        <div className="settings-card card">
          <h3>Profile Settings</h3>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" defaultValue="User Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="user@example.com" />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </form>
        </div>
        
        <div className="settings-card card">
          <h3>Team Management</h3>
          <div className="team-members">
            <h4>Current Team Members</h4>
            <ul>
              <li>user@example.com (You)</li>
              <li>sarah@example.com</li>
              <li>mike@example.com</li>
            </ul>
          </div>
          <form className="add-member-form">
            <h4>Add Team Member</h4>
            <div className="form-row">
              <input type="email" placeholder="Email address" />
              <button type="submit" className="btn btn-primary">Invite</button>
            </div>
          </form>
        </div>
        
        <div className="settings-card card">
          <h3>Preferences</h3>
          <div className="preference">
            <label>
              <input type="checkbox" defaultChecked />
              Email notifications
            </label>
          </div>
          <div className="preference">
            <label>
              <input type="checkbox" defaultChecked />
              Desktop notifications
            </label>
          </div>
          <button className="btn btn-primary">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;