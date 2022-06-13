import './App.css';
// List in React.js [list]  
const number = [2,4,5,2,15];
const newNumber = number.map(function(num){
  return num*2;
})
console.log(newNumber);
function App() {
 
  return (
    <div className="App">
    

       <label htmlFor="Search">Search: </label>
       <input type="text" id='search'  />
  
    </div>
  );
}

export default App;
