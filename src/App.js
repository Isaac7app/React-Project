import React,{Component} from 'react';
import Cardlist from './components/card-list/card-list';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters :[]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters:users }))
  }

  render(){
    return (
      <div className="App">
       <Cardlist monsters={this.state.monsters} />
       
      </div>
    );
  }
}

export default App;
