import List from './components/List';
import './App.css';
// javaScript Classes

// Class Defination
class Developer{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName(){
    return this.firstName +' ' + this.lastName
  }
}

//  Class initialization
const jaspreet = new Developer('Jaspreet','Singh')

console.log(jaspreet.getName());

// another class Instantiation
const simran = new Developer("Simran" , "kaur")
console.log(simran.getName())
function App() {
 
  return (
    // a JavaScript class definition exists, one can create multiple instances of it. It is similar to a React component, which has only one component definition, but can have multiple component instances:
    <div className=" my-6 App ">
       <label htmlFor="Search " className=' '>Search: </label>
       <input type="text" id='search' className='hover:border-2 hover:border-red-200 mx-auto'  />
       {/* Creating an instance of List Component */}
      <List/>
      {/* Creating an another instance of List Component */}
      <List/>
    </div>
  );
}

export default App;
