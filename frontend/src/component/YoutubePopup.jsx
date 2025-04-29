import '../styles/YoutubePopup.css';
import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { uploadYoutubePodcast } from '../service/podcastService';
import { useProject } from '../context/ProjectContext';

export default function YoutubePopup({ onClose, triggerRefresh }) {
  const [name, setName] = useState('');
  const [vedioUrl, setvedioUrl] = useState('');
  const { project } = useProject();
  const projectId = project?._id;

  const handleUpload = async () => {
    try {
      await uploadYoutubePodcast(projectId, name, vedioUrl);
      if (triggerRefresh) triggerRefresh();
    } catch (error) {
      console.error('Upload failed:', error);
    }

    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="youtube-popup">
        <div className="youtube-popup-header">
          <div className="title-with-icon">
            <FaYoutube size={28} color="#FF0000" />
            <h2>Upload from Youtube</h2>
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="youtube-popup-content">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Link</label>
          <textarea
            rows="4"
            value={vedioUrl}
            onChange={(e) => setvedioUrl(e.target.value)}
          />
        </div>

        <div className="youtube-popup-footer">
          <button onClick={handleUpload} className="upload-btn">Upload</button>
        </div>
      </div>
    </div>
  );
}
