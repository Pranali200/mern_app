import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateAccountPage from './pages/CreateAccount';
import CreateProjectPage from './pages/CreateProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}></Route>
        <Route path="/create-account" element={<CreateAccountPage/>}></Route>
        <Route path = "/dashboard" element = {<CreateProjectPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
