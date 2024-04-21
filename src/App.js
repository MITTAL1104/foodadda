import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import SignUp from './screens/SignUp';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes> 
      </Router>
    </>
  );
}

export default App;
