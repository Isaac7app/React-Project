import React,{Component} from 'react';
import Cardlist from './components/card-list.component/card-list';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters :[],
      searchFiled :''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters:users }))
  }

  render(){
    const { monsters, searchFiled} = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monsters.name.toLowerCase().include(searchFiled.toLocaleLowerCase())
    )

    return (
      <div className="App">
       <Cardlist monsters={filteredMonsters} />
       
      </div>
    );
  }
}

export default App;
