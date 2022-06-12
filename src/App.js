import './App.css';
// js object creation
const  welcome ={
  greeting: 'Hey',
  title:'React'
};
function App() {
  console.log(welcome)
  return (
    <div className="App">
       <h1>
        {welcome.greeting} {welcome.title}      
       </h1>

       <label htmlFor="Search">Search: </label>
       <input type="text" id='search'  />
    </div>
  );
}

export default App;
