
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Register';
import LOgin from './Login';


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Register/>}  />
        <Route path='/login' element={<LOgin/>}  />

        
        </Routes>
      </Router>

    </>

  );
}

export default App;
