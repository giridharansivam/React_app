import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FileUploadForm from './FileUploadForm';
import NewProduct from './NewProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/newshop">New Shop</Link>
            </li>
            <li>
              <Link to="/submitted-data">Submitted Data</Link>
            </li>
          </ul>
        </nav>

        
      <Routes>
        <Route path="/newshop" element={<FileUploadForm />} />
        <Route path="/submitted-data" element={<NewProduct/>}/>
        
      </Routes>
   
      </div>
    </Router>
  );
}

export default App;
