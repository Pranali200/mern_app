// src/pages/AddPodcastPage.jsx
import LayoutWrapper from './LayoutWrapper';
import YoutubePopup from './YoutubePopup'; // Assuming YoutubePopup path
import { useState } from 'react';

export default function AddPodcastPage() {
  const [isYoutubePopupOpen, setIsYoutubePopupOpen] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  const handleYoutubeClick = () => {
    setIsYoutubePopupOpen(true);
  };

  const closeYoutubePopup = () => {
    setIsYoutubePopupOpen(false);
  };

  return (
    <LayoutWrapper sectionTitle="Add Podcast">
      {/* Options Grid */}
      <div className="options-grid">
        <div className="option-card">
          <i className="fas fa-rss fa-2x"></i>
          <h3>RSS Feed</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>

        <div 
          className="option-card" 
          onClick={handleYoutubeClick}
          style={{ cursor: 'pointer' }}
        >
          <i className="fab fa-youtube fa-2x"></i>
          <h3>Youtube Video</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>

        <div className="option-card">
          <i className="fas fa-upload fa-2x"></i>
          <h3>Upload Files</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>
      </div>

      {/* Upload Box */}
      <div className="upload-grid">
    <div className="upload-box">
      <i className="fas fa-cloud-upload-alt fa-3x" style={{ color: '#6b21a8', marginBottom: '1rem' }}></i>
      <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
      <p className="upload-info">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
      <label className="upload-button">
        Select File
        <input type="file" className="hidden-input" onChange={handleFileSelect} />
      </label>
    </div>
  </div>

      {/* Youtube Popup */}
      {isYoutubePopupOpen && (
        <YoutubePopup onClose={closeYoutubePopup} />
      )}
    </LayoutWrapper>
  );
}
