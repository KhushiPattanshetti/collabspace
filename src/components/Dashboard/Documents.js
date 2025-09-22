// components/Dashboard/Documents.js
import React, { useState } from 'react';
import './Documents.css';

const Documents = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Project Requirements.pdf', date: '2023-05-15', sharedWith: 5 },
    { id: 2, name: 'Design Specifications.docx', date: '2023-05-10', sharedWith: 3 },
    { id: 3, name: 'Meeting Notes.pdf', date: '2023-05-05', sharedWith: 8 }
  ]);

  const handleFileUpload = (e) => {
    // In a real app, you would handle file upload here
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        date: new Date().toISOString().split('T')[0],
        sharedWith: 0
      };
      setDocuments([...documents, newDoc]);
    }
  };

  return (
    <div className="documents">
      <div className="section-header">
        <h2>Documents</h2>
        <div className="header-actions">
          <label htmlFor="file-upload" className="btn btn-primary">
            Upload Document
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      
      <div className="documents-grid">
        {documents.map(doc => (
          <div key={doc.id} className="document-card card">
            <div className="document-icon">📄</div>
            <h3>{doc.name}</h3>
            <div className="document-details">
              <span>Uploaded: {doc.date}</span>
              <span>Shared with: {doc.sharedWith} people</span>
            </div>
            <div className="document-actions">
              <button className="btn btn-secondary">View</button>
              <button className="btn btn-primary">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;