/*import React, { useState, useEffect } from 'react';
export default HomePage;

/*class App extends Component {
  constructor(props){
  super(props);

      list = ["ready", "set", "GO"];
      text = "";
}};

    this.addItem = this.addItem.bind(this);
  

  addItem(event); {
    event.preventDefault();

    let newItems = [...this.state.list, this.state.text];

    this.setState({ list: newItems, text: "" });
  }

  deleteItem(Item); {
    let filteredItems = this.state.list.filter((value) => value != item);
    this.setState({ list: filteredItems });
  

  render();{
    let listItems = this.state.list.map((item, idx) => (
      <Item key={idx} content={item} onDelete={() => this.deleteItem(item)} />
    ));*/
  
      /*return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>

          <List>{listItems}</List>

          <form onSubmit={this.addItem}>
            <input
              type="text"
              name="newTask"
              id="newTask"
              value={this.state.text}
              onChange={(event) => this.setState({ text: event.target.value })}
            />
            <button>Add</button>
          </form>

          <StudioGhibliList />
        </header>
      </div>
    );
  







/*
import './App.css';
import React from 'react';

import { useState, useEffect } from "react";*/



/*function App(props) {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("React Hooks");
  let [films, setFilms] = useState([]);

  async function getFilms() {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let data = await res.json();
    setFilms(data);
  }

  useEffect(() => {
    // call the studio ghibli api for films
    getFilms();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Title: {title} and Click Count: {count}
        </h1>
        <hr />
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
        <hr />
        <button onClick={(e) => setCount(count + 1)}>Update Count</button>
        <hr />
        <ul>
          {films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}















//everything below is from State and Props exercises
//class App extends Component {
  //constructor (props) {
    //super(props);
 // }

 //render() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        
      //</header>
    //</div>
  //);
 //}
//}

  //export default App;*/