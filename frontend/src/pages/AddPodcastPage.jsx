import LayoutWrapper from './LayoutWrapper';
import YoutubePopup from './YoutubePopup';
import PodcastManager from './PodcastManager';
import { useProject } from '../context/ProjectContext';
import { useState } from 'react';

export default function AddPodcastPage() {
  const [isYoutubePopupOpen, setIsYoutubePopupOpen] = useState(false);
  const  {project} = useProject();
 let projectId = project._id;
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
  };

  return (
    <LayoutWrapper sectionTitle="Add Podcast">
      <div className="options-grid">
        <div className="option-card">
          <i className="fas fa-rss fa-2x"></i>
          <h3>RSS Feed</h3>
          <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
        </div>

        <div
          className="option-card"
          onClick={() => setIsYoutubePopupOpen(true)}
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

     
      <PodcastManager projectId={projectId} onFileSelect={handleFileSelect} />

      {isYoutubePopupOpen && <YoutubePopup onClose={() => setIsYoutubePopupOpen(false)} />}
    </LayoutWrapper>
  );
}
