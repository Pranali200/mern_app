import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import LayoutWrapper from './LayoutWrapper';
import '../styles/ViewPodcast.css'; 
import {updatepodcast} from '../service/podcastService'
export default function ViewPodcast() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const podcast = location.state?.podcast;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTranscript, setEditedTranscript] = useState(podcast.transcript);

  const handleEditClick = () => {
    setIsEditing(true);
  };

    const handleSaveClick = async () => {
        try {
          await updatepodcast(id, { transcript: editedTranscript });
          // Update was successful
          setIsEditing(false);
        } catch (error) {
          console.error('Failed to update podcast:', error);
        }
      };
      
  

  const handleDiscardClick = () => {
    setEditedTranscript(podcast.transcript);
    setIsEditing(false);
  };

  return (
    <LayoutWrapper sectionTitle="Edit Transcript">
      <div className="view-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i>
        </button>

        {!isEditing ? (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <div className="edit-buttons">
            <button className="discard-button" onClick={handleDiscardClick}>
              Discard
            </button>
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        )}
      </div>

      <div className="view-podcast-container">
        <h3 className="speaker-heading">Speaker</h3>

        {!isEditing ? (
          <p className="transcript-text">{editedTranscript}</p>
        ) : (
          <textarea
            className="transcript-textarea"
            value={editedTranscript}
            onChange={(e) => setEditedTranscript(e.target.value)}
          />
        )}
      </div>
    </LayoutWrapper>
  );
}
