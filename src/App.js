import React,{Component} from 'react';
import main from './components/main';
import list from './components/list';
import './style.css';

class App extends Component{
  State={
    items:[],
    item:"",
    id:0,
  }
  this.handleInput=(text)=>{
    this.setState({
      item:text.target.value
    })
  }
  render()
  {
    return(
      <div className="App">
        <main {this.state.item}
        Input={this.Input}/>
      </div>
    )
  }
}
export default App;
