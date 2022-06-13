import List from './components/List';
import './App.css';
import React, { useState } from 'react';
// props in react js
const stories = [
  {
    title: 'sunny',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];


function App() {
  // useState in reactjs
  // searchTerm -> represent the current state
  // setSearchTerm -> Function to update the current state
  const handleChange =(event)=>{
    console.log("synthetic event : "+ event);
      console.log('value: '+event.target.value)
      setSearchTerm(event.target.value)
  }
  
  // JavaScript array destructing 
  
  // basic array defination
  const list = ['a','b'];
  
  // no arr destructing 
  const itemOne = list[0];
  const itemTwo = list[1];
  
  console.log(itemOne,itemTwo)
  // arr destructing
  const [firstItem , secondItem] = list;
  console.log(firstItem,secondItem)
  
  // In the case of React, the React useState hook is a function which returns an array.
  
  function getAlphabet(){
    return ['a','b']
  }
  
  // no array destructing
  const itemOne1 = getAlphabet()[0];
  const itemTwo1 = getAlphabet()[1];
  console.log(itemOne1 , itemTwo1)
  
  //  array destructing
  const [firstItem1 , secondItem1] = getAlphabet();
  console.log(firstItem1 , secondItem1)
  
  // Array destructuring is just a shorthand version of accessing each item one by one. If you express it without the array destructuring in React, it becomes less readable:
  
  // less readable version without array destructuring
  // const searchTermState1 = React.useState('');
  // const searchTerm1 = searchTermState1[0];
  // const setSearchTerm1 = searchTermState1[1];
  
  // array destructuring
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
 
    <div className=" my-6 App ">
        <h1>My Hacker Stories</h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
        <p>
          Searching for  <strong>{searchTerm}</strong>
        </p>
        <hr />
       <List list ={stories}/>

    </div>
  );
}

export default App;
