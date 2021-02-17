import React, {Component} from 'react';
import List from './components/List'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     details:[],
      nameInput:{
       text: "",
       key: "",
    },
      numberInput:{
        text: "",
        key: ""
    }
  }
  this.addName = this.addName.bind(this);
  this.addNumber = this.addNumber.bind(this);
  this.newContact = this.newContact.bind(this);
}

  // addName() {} //enter name

  // addNumber(event) {} //enter number

  addName(event) {
    this.setState({
      nameInput:{
        text: event.target.value,
        key: Date.now() 
      }
    })
  }
  addNumber(event) {
    this.setState({
      numberInput:{
        text: event.target.value,
        key: Date.now() 
      }
    })
  }

  newContact(event) {
    event.preventDefault();
    const nameInfo = this.state.nameInput;
    const numberInfo = this.state.numberInput;
    console.log(nameInfo)
    console.log(numberInfo)
    if(nameInfo.text && numberInfo.text!==""){
      const newList=[...this.state.list, nameInfo, numberInfo];
      this.setState({
        list: newList,
        nameInput:{
          text:"",
        },
        numberInput:{
          text:"",
        }
      })
    }
    }
  
  render(){
    return (
      <div className="App">
        <form id="contact-list" onSubmit={this.newContact}>
          <input type="text" placeholder="Enter Name" value={this.state.nameInput.text} onChange={this.addName}/>
          <input type="text" placeholder="Enter Phone Number" value={this.state.numberInput.text} onChange={this.addNumber}/>
          <button type="submit">Add Contact</button>
        </form>
        <List items = {this.state.items}/>
      </div>
      
    )

  }
}

{/* <input type="text" onChange={this.addName} value={this.nameInput}/>
<input type="text" onChange={this.addNumber} value={this.numberInput}/>
<Button
name = {this.addName}
number = {this.addNumber}/> */}


{/* <Button
title = { "Increment" }
task = { () => this.incrementCount() }
/>
<Button
title = { "Decrement" }
task = { () => this.decrementCount () } */}


export default App;
