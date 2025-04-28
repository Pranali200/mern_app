import { useNavigate, useParams } from 'react-router-dom';
import LayoutWrapper from './LayoutWrapper';
import '../styles/ViewPodcast.css'; 

export default function ViewPodcast() {

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);


  return (
    <LayoutWrapper sectionTitle="View Podcast">
      <div className="view-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i>
        </button>

        <button className="edit-button">
          Edit
        </button>
      </div>

      <div className="view-podcast-container">
        <h3>Speaker</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

        <h3>Transcript</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
        </p>
      </div>
    </LayoutWrapper>
  );
}
