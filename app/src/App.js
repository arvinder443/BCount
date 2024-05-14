
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Register';


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Register/>}  />

        
        </Routes>
      </Router>

    </>

  );
}

export default App;
