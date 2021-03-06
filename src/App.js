import React,{Component} from 'react';
import Cardlist from './components/card-list.component/card-list';
import SearchBox from './components/search-box/search-box.component';
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

  handleChange = (e) => {
    this.setState({searchFiled : e.target.value})

  }

  render(){
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase());
    })
     

    return (
      <div className="App">
        <h1>Robo Friends</h1>
         <SearchBox 
         placeholder='search monsters'
         handleChange={this.handleChange}
         />
       <Cardlist monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
