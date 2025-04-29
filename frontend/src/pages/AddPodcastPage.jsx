import LayoutWrapper from '../component/LayoutWrapper';
import '../styles/AddPodcast.css';
import YoutubePopup from '../component/YoutubePopup';
import PodcastManager from '../component/PodcastManager';
import { useProject } from '../context/ProjectContext';
import { useState } from 'react';
import RssImage from '../images/RssFeed.png';
import YoutubeImage from '../images/Yt.png';

export default function AddPodcastPage() {
  const [isYoutubePopupOpen, setIsYoutubePopupOpen] = useState(false);
  const { project } = useProject();
  let projectId = project._id;
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const triggerRefresh = () => setRefreshTrigger(prev => prev + 1);
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <LayoutWrapper sectionTitle="Add Podcast">
      <div className="options-grid">
        <div className="option-card">
          <img src={RssImage} alt="RSS Feed" />
          <h3>RSS Feed</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>

        <div
          className="option-card"
          onClick={() => setIsYoutubePopupOpen(true)}
          style={{ cursor: 'pointer' }}
        >
          <img src={YoutubeImage} alt="YouTube" />
          <h3>Youtube Video</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>

        <div className="option-card">
          <i className="fas fa-upload fa-2x"></i>
          <h3>Upload Files</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>
      </div>

      <PodcastManager
        projectId={projectId}
        onFileSelect={handleFileSelect}
        refreshTrigger={refreshTrigger}
      />

      {isYoutubePopupOpen && (
        <YoutubePopup
          onClose={() => setIsYoutubePopupOpen(false)}
          triggerRefresh={triggerRefresh}
        />
      )}
    </LayoutWrapper>
  );
}
