import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AuthRoute from './AuthRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path = "/dashboard" element={<AuthRoute><Dashboard/></AuthRoute>}/>
      <Route path='/add-user' element={<AuthRoute><AddUser/></AuthRoute>}/>
      <Route path='/edit-user/:id' element={<AuthRoute><EditUser/></AuthRoute>}/>
     
    </Routes>
  );
}

export default App;
