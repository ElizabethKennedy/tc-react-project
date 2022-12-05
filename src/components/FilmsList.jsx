import React, { Component } from 'react';

export default class FilmsList extends Component  {

constructor (props){
    super(props);

    this.state = {
        list: []
    }

    this.getFilms = this.getFilms.bind(this);
}



getFilms = async function(){
    try{
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let resJson = await res.json();
        this.setState(this.state.list = resJson);
    } catch (e){
        console.error(e);
    }
}

componentDidMount(){
    this.getFilms();
}

    render(){
        return (
        <ul>
            {this.state.list.map((ele) => {
               return <li key={ele.id}>{ele.title} <br /> {ele.description}</li>
            })};
        </ul>
        );
    };

}














/*import React, { useState, useEffect } from 'react';
export default FilmsList;


class FilmsList {

}

function FilmsList (props){

    const [list, setList] = useState([]);

async function getFilms (){
    try{
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let films = await res.json();
        setList(films);
    } catch (e){
        console.error(e);
    }
}

useEffect(() => {
    getFilms();
}, []);


        return (
        <ul>
            {list.map((ele) => {
               return <li key={ele.id}><h2>{ele.title}</h2> <br /> <img src={ele.image} alt="Movie Poster" className="filmsList-img" /> <br /> <span className='light-text'><i>{ele.description}</i></span> </li>
            })};

        </ul>
        );
}
*/
