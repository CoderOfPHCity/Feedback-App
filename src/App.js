
import React from 'react';
import Header from './Header';
import FeedbackList from './FeedbackList';
import Feedbackform from './components/Feedbackform';
import FeedbackStats from './components/FeedbackStats';
import Aboutpage from './pages/Aboutpage';
import AboutLink from './components/AboutLink';
import { Feedbackprovider } from './components/context/FeedbackContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <Feedbackprovider>  
    <Router> 
    <Header />
     <div className="container">
       <Routes> 
       <Route  path='/' element= {
          <>
            <FeedbackStats  />
            <Feedbackform />
            <FeedbackList />
    
         </>
       }       
       ></Route>
        <Route path='/about' element={<Aboutpage />} />
        </Routes>
      <h1>Welcome from the feedback feedback</h1>
      <AboutLink />
    </div>
    </Router>
   </Feedbackprovider>
  );
}

export default App;
