import { Component } from "react";
import { Home } from "./Home";
import { About } from "./About";
import Contacts from './Contacts';


export class App extends Component {
  state = {};

  // jsx
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Home></Home>
        <About></About>
        <Contacts></Contacts>
      </div>
    )
    
  }
}
