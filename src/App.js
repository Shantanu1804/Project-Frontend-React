import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Employees from './components/users/Employees';
import EmployeeData from './components/users/EmployeeData';
import Navbar from './components/layout/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import {ProductProvider} from './components/Context';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <Router>

<div className="App">
      <Navbar></Navbar>
      <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/user/employees" element={<Employees/>}></Route>
      <Route path="/user/employeedata" element={<EmployeeData/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>

      </Routes>
      
<ProductProvider/>
    
      </div>

    </Router>
    
  );
}

export default App;
    