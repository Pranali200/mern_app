import { useEffect, useState } from 'react';
import { getpodcast } from '../service/podcastService';
import '../styles/PodcastManager.css';
import { useNavigate } from 'react-router-dom';

export default function PodcastManager({ projectId, onFileSelect, refreshTrigger }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!projectId) return;
      try {
        const data = await getpodcast(projectId);
        setPodcasts(Array.isArray(data?.podcasts) ? data.podcasts : []);
      } catch {
        setPodcasts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId, refreshTrigger]);

  if (loading) return <p>Loading...</p>;

  if (podcasts.length === 0) {
    return (
      <div className="upload-grid">
        <div className="upload-box">
          <i className="fas fa-cloud-upload-alt fa-3x" style={{ color: '#6b21a8', marginBottom: '1rem' }}></i>
          <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
          <p className="upload-info">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
          <label className="upload-button">
            Select File
            <input type="file" className="hidden-input" onChange={onFileSelect} />
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="podcast-table-container">
      <div className="podcast-title">Your Files</div>
      <table className="podcast-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {podcasts.map((podcast, index) => (
            <tr key={podcast._id}>
              <td>{index + 1}</td>
              <td>{podcast.name}</td>
              <td>
                {new Date(podcast.uploadedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}{' | '}
                {new Date(podcast.uploadedAt).toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                })}
              </td>
              <td>
                <button className="action-button view-button" onClick={() => navigate(`/view/${podcast._id}`, { state: { podcast } })}>View</button>
                <button className="action-button delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
