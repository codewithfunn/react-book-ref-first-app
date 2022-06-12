import './App.css';
// func in js
function getTitle(title){
  return title;
}
function App() {
  
  return (
    <div className="App">
       <h1>
        hello {getTitle('React')}      
       </h1>

       <label htmlFor="Search">Search: </label>
       <input type="text" id='search'  />
    </div>
  );
}

export default App;
