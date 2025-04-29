import { useState } from "react";
import { createproject } from "../service/projectService";
import { useUser } from '../context/UserContext';
import '../styles/CreateProjectPopup.css'; 

export default function CreateProjectPopup({ onClose, onCreate }) {
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');
  const { user } = useUser();

  const handleCreate = async () => {
    if (projectName.trim() === '') {
      setError("Project Name can't be empty");
      return;
    }
    try {
      const newProject = await createproject(user._id, projectName);
      onCreate(newProject);
      onClose();
    } catch (err) {
      console.error('Error creating project:', err);
      setError('Failed to create project. Try again.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Create Project</h2>
        <label className="popup-label">Enter Project Name:</label>
        <input
          type="text"
          className="popup-input"
          placeholder="Type here"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
            setError('');
          }}
        />
        {error && <p className="popup-error">{error}</p>}
        <div className="popup-buttons">
          <button onClick={onClose} className="popup-cancel">Cancel</button>
          <button onClick={handleCreate} className="popup-create">Create</button>
        </div>
      </div>
    </div>
  );
}
