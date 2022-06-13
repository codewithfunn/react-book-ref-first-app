import './App.css';
// List in React.js [list] / list Object in react [{list_object}] 
const list =[
  {
    title:'React',
    url :'http://reactjs.org/',
    author:'Jordan walke',
    num_comment:3,
    point :4,
    objectId:0,
  },
  {
    title:'Redux',
    url :'http://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comment:2,
    point :5,
    objectId:1,
  }
]

function App() {
  console.log(list);
  return (
    <div className="App">
    

       <label htmlFor="Search">Search: </label>
       <input type="text" id='search'  />
       {/* Iterate the list_Object using map func */}
        {list.map((item ,objectId)=>{
        return<ul>
          <li>title : {item.title}</li>
          <li>url : {item.url}</li>
          <li>author : {item.author}</li>
          <li>num_of_Comment : {item.num_comment}</li>
          <li>Point : {item.point}</li>
          <li>ObjectId : {objectId}</li>
      </ul>
        })}
      
    </div>
  );
}

export default App;
