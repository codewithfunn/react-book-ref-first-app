import List from './components/List';
import './App.css';
// javaScript func

// function defination
// function(){...}

// arrow function defination
// const ()=>{...}

// You can remove the parentheses in an arrow function expression if it has only one argument, but multiple arguments require parentheses:
// allowed
// const item =>{...}

// allowed 
// const (item)=>{...}

// not allowed
// const item, index =>{...}

// allowed
// const (item , index)=>{...}

//--------------------------------- 
// concise body, an implicit return statement

// with block body
// count=>{
//   // perform any task in b/w
// }

// with concise body
// count => count+1;
// --------------------------------


function App() {
 
  return (
    // a JavaScript class definition exists, one can create multiple instances of it. It is similar to a React component, which has only one component definition, but can have multiple component instances:
    <div className=" my-6 App ">
       <label htmlFor="Search " className=' '>Search: </label>
       <input type="text" id='search' className='hover:border-2 hover:border-red-200 mx-auto'  />
       <List/>
    </div>
  );
}

export default App;
