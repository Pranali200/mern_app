import { useState } from "react";
import { createproject } from "../service/projectService";
import CommonPopup from './CommonPopup'; 
import { useUser } from '../context/UserContext';

export default function CreateProjectPopup({ onClose, onCreate }) {
  const [projectName, setProjectName] = useState('');
  const [error, setError] = useState('');
  const { user } = useUser();

  const handleCreate = async () => {
    if (projectName.trim() === '') { 
      setError('Project Name can\'t be empty');
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
    <CommonPopup title="Create Project" onClose={onClose}>
      <input
        type="text"
        placeholder="Type here"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <div className="popup-buttons">
        <button onClick={onClose} className="cancel-button">Cancel</button>
        <button onClick={handleCreate} className="create-button">Create</button>
      </div>
    </CommonPopup>
  );
}
