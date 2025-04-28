import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateAccountPage from './pages/CreateAccount';
import CreateProjectPage from './pages/CreateProjectPage';
import { UserProvider } from './context/UserContext'
import AddPodcastPage from './pages/AddPodcastPage';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}></Route>
        <Route path="/create-account" element={<CreateAccountPage/>}></Route>
        <Route path = "/dashboard" element = {<CreateProjectPage/>}></Route>
        <Route path ="/addpodcast" element = {<AddPodcastPage/>}></Route>
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
