import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  fields:[]
}



addFields() {
  this.setState({fields: [...this.state.fields, '']})
}

handleChange(e, index) {
this.state.fields[index] = e.target.value
this.setState({fields: this.state.fields})
var title = this.state.fields
var array =[];
if(localStorage.getItem('array') == null) {
array.push(title);
localStorage.setItem('fields',JSON.stringify(array));

}else {
  var array = JSON.parse(localStorage.getItem('array'));
  array.push(title);
  localStorage.setItem('fields',JSON.stringify(array));
}
}

handleRemove(index) {
this.state.fields.splice(index,1);
this.setState({fields: this.state.fields})
}

handleSubmit(e) {
  var title = this.refs.title.value;
  console.log(title);
}

  render() {
  return (
    <div className="App">
     <h1>Registration Form</h1>
     <label>Field</label>
     {
       this.state.fields.map((field,index)=>{
         return (
           <div ey={index}>
             <input onChange={(e)=>this.handleChange(e, index)} value={field} ref="title" />
             <button onClick={()=>this.handleRemove(index)}>Remove</button>
           </div>
         )
       })
     }
     <br />
     <button onClick={(e)=>this.addFields(e)}>Add Input Field</button>
     <br />
     <button onClick={(e)=>this.handleSubmit(e)}>SUBMIT</button>
    </div>
  );
}
}

export default App;
