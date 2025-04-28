import '../styles/PopUp.css';

export default function CommonPopup({ title, children, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>{title}</h2>
        <div className="popup-content">
          {children}
        </div>
        <div className="popup-buttons">
          <button onClick={onClose} className="cancel-button">Close</button>
        </div>
      </div>
    </div>
  );
}
