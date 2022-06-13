import React from 'react'
// don’t render any other components are called leaf components(_list)
const lists = [
  {
    title: 'React',
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
]
const List = () => {
  return (
    <div className='container'>
      <h1>List:</h1>
      {lists.map(function(item) {
   return (
      <div key={item.objectID}>
      <span>
      <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      </div>
    );
})}
    </div>
  )
}

export default List