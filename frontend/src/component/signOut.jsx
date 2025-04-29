import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function SignoutButton() {
    const { setUser } = useUser();
    const navigate = useNavigate();

    const handleSignout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    return (
        <button onClick={handleSignout}>
            Sign Out
        </button>
    );
}
