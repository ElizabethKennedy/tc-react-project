import React, { Component } from "react";
import FilmsList from "./components/FilmsList";

export default class App extends React.Component {
constructor(props){ 
    super (props)

  this.state = {
    list: ["ready","set","GO"],
    text: "",
  }; 
  this.handleInput = this.handleInput.bind(this);
 this.onSubmit = this.onSubmit.bind(this);
}
handleInput(event){
  this.setState({
    text: event.target.value,
  });
}
onSubmit(event) {
    event.preventDefault();
    this.setState({list: [...this.state.list, this.state.text]})
}

  // another way:
  //let newItem=[...this.state.list,this.state.text]
  //this.setState({list: newItem,text:""})

  render() {
    // let listItem=this.state.list.map((e,idx)=>(
    //   <li >{e}</li>
    // ))
    return (
      <div className="App">
        <div className="App-header">
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
    
        <input 
        type="text" 
        name="newTask"
        id="newTask"
        value={this.state.text}
        onChange={(event)=>this.setState({text:event.target.value})}></input>
          <button type="submit">Add</button>
          </form>
        <ul>
          {this.state.list.map((item, index) => {
          return <li key={index}>{item}</li>
         })}
        </ul>
        <FilmsList />
        </div>
        </div>
    );
  }
}
