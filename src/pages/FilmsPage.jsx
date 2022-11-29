/*import { Component } from "react";
import { getData } from "../../helpers/data";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
    };
  }

  async getFilms() {
    let list = await getData("films");
    this.setState({ list, isLoading: false });
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul>
          {this.state.list.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      );
    }
  }
}

export default FilmsList;






/*import { render } from '@testing-library/react';
import React, { Component } from 'react';

class FilmsList extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
    }
}


getFilms(){
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) =>  {
        return res.json();

    }}
    .then(result) =>  {
        this.setState({
            list: result,
        });
    }
    .catch((error) => console.error(error));
}
componentDidMount(){
    console.log("App- Created")
    this.getFilms();
}
// componentDidUpdate(){
//     console.log("App- Update")
    
// }
// componentDidUnmount(){
//     console.log("App- Unmount")

// }

render() {
    if(this.state.isLoading){
        return <p>Loading ... </p>
    }else
  return (<ul>
    {this.state.list.map((film)=>(<li key={film.id}>{film.title}</li>))}
  </ul>)
}


export default FilmsList;*/