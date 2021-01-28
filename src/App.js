import React, { useState } from 'react';
import './App.css';

function App() {

  //use state to allow the creation of the functionality 
//uses the default value

//allows the first counter number to be set and then allows you to set up the function to change the counter number
//using the function will mean the function will only run on the first load of the application. 
//this means that everytime the application renders this will only be run on the first render
  const [counter, setCounter] = useState(() =>{
    console.log('run function')
    return 4;
  });


  function decrease_counter(){
    //allows you to decrease the value which is displayed on the screen by one each time the button is clicked
    //This loads in the previous value to ensure that the correct number is reduced. 
    setCounter(previous_counter => previous_counter -1);
  };


  function increase_counter(){
    //allows you to increase the value which is displayed on the screen by one each time the button is clicked
    //This loads in the previous value to ensure that the correct number is increased 
    setCounter(previous_counter => previous_counter +1);
  };


  return (
    //use an empty element to contain more than one component within the application
   <>
   <button onClick={decrease_counter}>-</button>
   <span>{counter}</span>
   <button onClick={increase_counter}>+</button>
   </>
  );
}

export default App;
