import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TasksList';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputItem:'',
            ItemsList:[]
        }
    }

    onChange = (event) => {
        this.setState({inputItem: event.target.value});
    } 

    onSubmit = (event) => {
      event.preventDefault();

      if (this.state.inputItem === ''){return false}
      else {
       
        this.setState({
            inputItem:'',
            ItemsList: [...this.state.ItemsList, this.state.inputItem]
        })}
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Todo List</h1>
        </header>

        <form onSubmit={this.onSubmit}>

        

        <input type = "text" 
        className = "textInput"
        value={this.state.inputItem}
        onChange={this.onChange}
        />

       

        <button className="btn">Submit</button>
        </form>

        <h4 className="listTitle">My Tasks List</h4>

        <div className="Taskslist"> 
        <TaskList ItemsList={this.state.ItemsList}/>
      </div>

      </div>


    );
  }
}

export default App;