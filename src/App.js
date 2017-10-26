// ask mentor about console.log testing (want to see newInput on state, updated list on state, value in input box matches newInput on state). also ask about different ways of doing e.target.value. also, why are we passing a key into ListItem on List.js and then not using it? what is happening here? did I reset the input field correctly? is there a way to have onClick handler trigger when user presses enter in the input box?

import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super()

    this.state = {
      newItem: '',
      list: ['wash car', 'put up Christmas lights']
    }
    this.handleInput = this.handleInput.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  handleInput(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  addToList() {
    let updatedList = this.state.list;
    updatedList.push(this.state.newItem);
    this.setState({
      list: updatedList
    })
    this.setState({
      newItem: '',
    })
  }


  render() {
    return (
      <div>
        <Form
          handleInput={this.handleInput}
          addToList={this.addToList}
          newItem={this.state.newItem} />
        <List
          list={this.state.list} />
      </div>
    )
  }
}

export default App;
