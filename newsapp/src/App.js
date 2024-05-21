import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Onboard from './components/Onboard';
import Profile from './components/Profile';
import SignUp from './components/Signup';



function App() {


  return (
   
<div className='app-container'>  
<Router>  
  <Routes> 
  <Route path="/onboard" element={<Onboard/>}/>
 <Route exact path="/login" element={<Login/>}/>
 <Route exact path="/home" element={<Home/>}/>
 <Route exact path="/signup" element={<SignUp/>}/>
 <Route exact path="/profile" element={<Profile/>}/>
  </Routes>
   
    

</Router>
   
</div>
 
 
  
  )
}

export default App;
