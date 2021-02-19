import React, {Component} from 'react';
import List from './components/List';
import './App.css';

class App extends Component {

  state = {
    names: [],
    numbers: [],
    name: "",
    number: ""
  }

addName = (event) => {
  this.setState({
    name: event.target.value
  })
}

addNumber = (event) => {
  this.setState({
    number: event.target.value
  })
}

addContact = () => {
  this.setState({
    names: [...this.state.names, this.state.name],
    numbers: [...this.state.numbers, this.state.number]
  })
  this.setState({
    name: "",
    number: ""
  })
}

render(){
  return (
    <div className="App">
        <input className="input" type="text" placeholder="Enter Name" value={this.state.name} onChange={this.addName}/>
        <input className="input" type="text" placeholder="Enter Phone Number" value={this.state.number} onChange={this.addNumber}/>
        <button onClick={this.addContact} type="submit">Add Contact</button>
        <br/>
        <ul>
          {this.state.names.map((name, index) => {
            return(
              <li key ={index}>
                {name}
              </li>)})}
          {this.state.numbers.map((number, index) => {
            return(
              <li key={index}>
                {number}
              </li>)})}
        </ul>
    </div>
    )
  }
}

export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//      details:[],
//       nameInput:{
//        text: "",
//        key: "",
//     },
//       numberInput:{
//         text: "",
//         key: ""
//     }
//   }
//   this.addName = this.addName.bind(this);
//   this.addNumber = this.addNumber.bind(this);
//   this.newContact = this.newContact.bind(this);
// }

//   // addName() {} //enter name

//   // addNumber(event) {} //enter number

//   addName(event) {
//     this.setState({
//       nameInput:{
//         text: event.target.value,
//         key: Date.now() 
//       }
//     })
//   }
//   addNumber(event) {
//     this.setState({
//       numberInput:{
//         text: event.target.value,
//         key: Date.now() 
//       }
//     })
//   }

//   newContact(event) {
//     event.preventDefault();
//     const nameInfo = this.state.nameInput;
//     const numberInfo = this.state.numberInput;
//     console.log(nameInfo)
//     console.log(numberInfo)
//     if(nameInfo.text && numberInfo.text!==""){
//       const newList=[...this.state.list, nameInfo, numberInfo];
//       this.setState({
//         list: newList,
//         nameInput:{
//           text:"",
//         },
//         numberInput:{
//           text:"",
//         }
//       })
//     }
//     }
  

