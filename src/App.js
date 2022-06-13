import List from './components/List';
import './App.css';
 
function App() {
 
  return (
    <div className=" my-6 App ">
       <label htmlFor="Search " className=' '>Search: </label>
       <input type="text" id='search' className='hover:border-2 hover:border-red-200 mx-auto'  />
      <List/>
    </div>
  );
}

export default App;
