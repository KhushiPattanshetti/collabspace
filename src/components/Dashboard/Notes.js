// components/Dashboard/Notes.js
import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Meeting Notes', content: 'Discussed project timeline and deliverables.', lastEdited: '2023-05-18' },
    { id: 2, title: 'Ideas', content: 'Potential features to consider for phase 2.', lastEdited: '2023-05-15' }
  ]);
  const [activeNote, setActiveNote] = useState(null);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.title) {
      const note = { 
        ...newNote, 
        id: notes.length + 1, 
        lastEdited: new Date().toISOString().split('T')[0] 
      };
      setNotes([...notes, note]);
      setNewNote({ title: '', content: '' });
    }
  };

  return (
    <div className="notes">
      <div className="section-header">
        <h2>Shared Notes</h2>
        <button className="btn btn-primary" onClick={() => setActiveNote('new')}>
          Add Note
        </button>
      </div>
      
      <div className="notes-content">
        <div className="notes-list">
          {notes.map(note => (
            <div key={note.id} className="note-preview card" onClick={() => setActiveNote(note)}>
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 50)}...</p>
              <span className="note-date">Last edited: {note.lastEdited}</span>
            </div>
          ))}
        </div>
        
        <div className="note-editor card">
          <h3>{activeNote ? (activeNote === 'new' ? 'New Note' : activeNote.title) : 'Select a note'}</h3>
          
          {activeNote && (
            <div className="editor-content">
              {activeNote === 'new' ? (
                <form onSubmit={handleAddNote}>
                  <input
                    type="text"
                    placeholder="Note title"
                    value={newNote.title}
                    onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                    className="note-title-input"
                  />
                  <textarea
                    placeholder="Note content"
                    value={newNote.content}
                    onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                    rows="10"
                  />
                  <button type="submit" className="btn btn-primary">Save Note</button>
                </form>
              ) : (
                <>
                  <textarea
                    value={activeNote.content}
                    onChange={(e) => setActiveNote({...activeNote, content: e.target.value})}
                    rows="10"
                  />
                  <button className="btn btn-primary">Update Note</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;