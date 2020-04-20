import React from 'react';
//route?
import {  Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';


//routes
function Home (props) {
  // debugger
  return <h1>Home Comp</h1>;
}

function About (props) {
  return <h1>About Comp</h1>;
}
const App = () => {
  // const [savedList, setSavedList] = useState([]);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };

  return (
    <div>
      
      {/* <SavedList list={savedList} /> */}
   
     

 
     
     <Link to='/' >Home</Link>
     <Link to='/about'>About</Link>

<Route exact path="/home" component={Home} />
     <Route exact path='/' component={Home} />
     <Route exact path='/about' component={About}/>
    
    </div>
  );
};

export default App;
