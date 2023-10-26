
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Login from './components/form/Login';
import Register from './components/form/Register';
import Home from './components/homepage/Home';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Login />}  />
          <Route path='/register' element= {<Register />}  />
          <Route path='/homepage' element= {<Home />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App;
