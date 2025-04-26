import LoginPage from './pages/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateAccountPage from './pages/CreateAccount';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}></Route>
        <Route path="/create-account" element={<CreateAccountPage/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
