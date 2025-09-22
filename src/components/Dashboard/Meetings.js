// components/Dashboard/Meetings.js
import React, { useState } from 'react';
import './Meetings.css';

const Meetings = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, title: 'Project Kickoff', date: '2023-06-01', time: '10:00 AM', participants: 5 },
    { id: 2, title: 'Design Review', date: '2023-05-25', time: '2:00 PM', participants: 3 }
  ]);
  const [newMeeting, setNewMeeting] = useState({ title: '', date: '', time: '' });

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (newMeeting.title && newMeeting.date && newMeeting.time) {
      setMeetings([...meetings, { ...newMeeting, id: meetings.length + 1, participants: 0 }]);
      setNewMeeting({ title: '', date: '', time: '' });
    }
  };

  return (
    <div className="meetings">
      <div className="section-header">
        <h2>Meetings</h2>
        <button className="btn btn-primary">Schedule New Meeting</button>
      </div>
      
      <div className="meetings-content">
        <div className="upcoming-meetings">
          <h3>Upcoming Meetings</h3>
          {meetings.map(meeting => (
            <div key={meeting.id} className="meeting-card card">
              <h4>{meeting.title}</h4>
              <p>Date: {meeting.date} at {meeting.time}</p>
              <p>Participants: {meeting.participants}</p>
              <div className="meeting-actions">
                <button className="btn btn-secondary">Join</button>
                <button className="btn btn-primary">Edit</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="meeting-form card">
          <h3>Schedule a New Meeting</h3>
          <form onSubmit={handleAddMeeting}>
            <div className="form-group">
              <label>Meeting Title</label>
              <input
                type="text"
                value={newMeeting.title}
                onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={newMeeting.date}
                onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Schedule Meeting</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Meetings;