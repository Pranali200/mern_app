
import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa'; // YouTube icon

export default function YoutubePopup({ onClose }) {
  const [name, setName] = useState('');
  const [transcript, setTranscript] = useState('');

  const handleUpload = () => {
    console.log('Uploaded:', { name, transcript });
    // TODO: Handle API upload here
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <div className="popup-title">
            <FaYoutube size={24} color="#FF0000" style={{ marginRight: '8px' }} />
            <h2>Upload from Youtube</h2>
          </div>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>

        <div className="popup-content">
          <label className="popup-label">Name</label>
          <input
            type="text"
            className="popup-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />

          <label className="popup-label" style={{ marginTop: '1rem' }}>Transcript</label>
          <textarea
            className="popup-textarea"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="Enter Transcript"
            rows="4"
          />
        </div>

        <div className="popup-buttons" style={{ justifyContent: 'flex-end' }}>
          <button onClick={handleUpload} className="upload-button">Upload</button>
        </div>
      </div>
    </div>
  );
}
