import React from 'react'
 
const List = (props) => {
  return (
    <div className=' '>
      <h1>List:</h1>

      <ul>
    {props.list.map((item) => (
      <li key={item.objectID} className="list-disc">
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
    </div>
  )
}

export default List