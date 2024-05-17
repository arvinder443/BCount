
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Register';
import Login from './Login';
import Master from './Master';
import Home from './Home';


function App() {
  return (
    <>
   <Router>
  <Routes>
  <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    <Route path="/main" element={<Master />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
</Router>


    </>

  );
}

export default App;
