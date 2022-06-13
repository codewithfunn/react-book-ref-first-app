// import List from './components/List';
import './App.css';
//  handler Function
//*** The synthetic event is essentially a wrapper around the browser’s native event⁵¹, with more functions that are useful to prevent native browser behavior (e.g. refreshing a page after the user clicks a form’s   submit button). ****/
const handleChange =(event)=>{
    console.log("synthetic event : "+ event);
    console.log('value: '+event.target.value)
}
function App() {
 
  return (
    // a JavaScript class definition exists, one can create multiple instances of it. It is similar to a React component, which has only one component definition, but can have multiple component instances:
    <div className=" my-6 App ">
       <label htmlFor="Search " className=' '>Search: </label>
       <input type="text" id='search' className='hover:border-2 hover:border-red-200 mx-auto'  />
       <input type="text" name='input' onChange={handleChange} placeholder="search"/>
       {/* <List/> */}
    </div>
  );
}

export default App;
