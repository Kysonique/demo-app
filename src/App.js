import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import LandingPage from './components/landing';
import UploadDoc from './components/upload';
import LoginPage from './components/login';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/upload' element={<UploadDoc/>}/>
        <Route path='/login' element={<LoginPage/>} />
        

      </Routes>
    </div>
  );
}

export default App;
