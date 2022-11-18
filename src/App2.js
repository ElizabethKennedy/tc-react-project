import React, {Component} from 'react'
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: ["Ready", "Set", "GO"],
      task:"",

    }; 
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.items, this.state.task];
    this.setState({items: newList});
  }

  //updateItems() {
    //let newItems = [...this.state.items, this.state.task];
    //this.setState({newItems});
  //}

render() {


  return (
    <div>
      <h2>ToDoItems</h2>
      <div>
        {/* Controlled Input */}
        <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          value={this.state.task}
          onChange={(event) => this.setState({task: event.target.value})}
          />
          <button>Add</button>
          </form>
      </div>
      <ul>
        {/* rendered list */}
        {this.state.items.map((item, idx) => {
          return <li key={idx}>{item}</li>
        })}
        
      </ul>
    </div>
)}}

export default App;
    











