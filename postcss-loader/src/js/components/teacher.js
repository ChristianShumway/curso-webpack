import React from 'react'

const Teacher = (props) => {
  return(
    <li className="teacher">
      {props.name} - <a href={`http://wwww.twitter.com/${props.twitter}`}>{props.twitter}</a>
    </li>
  );
}

export default Teacher;