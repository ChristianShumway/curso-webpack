import React, {Component} from 'react'
import Teacher from './teacher'

class Teachers extends Component{
  render(){
    console.log(this.props.data.teachers);
    return(
      <ul className="container-teachers">
        {
          this.props.data.teachers.map ( teacher => 
            <Teacher {...teacher} />
          )
        }
      </ul>
    );
  }
}

export default Teachers;