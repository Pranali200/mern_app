import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateAccountPage from './pages/CreateAccount';
import CreateProjectPage from './pages/CreateProjectPage';
import { UserProvider } from './context/UserContext'
import AddPodcastPage from './pages/AddPodcastPage';
import { ProjectProvider } from './context/ProjectContext'
import ViewPodcast from './pages/ViewPodcast';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}></Route>
        <Route path="/create-account" element={<CreateAccountPage/>}></Route>
        <Route path = "/dashboard" element = { <ProjectProvider><CreateProjectPage/></ProjectProvider>}></Route>
        <Route path ="/addpodcast" element = {<ProjectProvider><AddPodcastPage/></ProjectProvider>}></Route>
        <Route path ="/view" element = {<ProjectProvider><ViewPodcast/></ProjectProvider>}></Route>
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
