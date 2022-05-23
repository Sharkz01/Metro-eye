import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoginScreen   from "./LoginScreen"
import HomeScreen from '../src/HomeScreen'
import sidebar from '../src/components/sidebar/sidebar'
//import { Link } from 'react-router-dom';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import home from "../src/Pages/home"
import record from "../src/Pages/record"
import user from "../src/Pages/user"

class App extends React.Component{
 
  constructor(props){
    super(props)
    this.state = {
      loggedIn : localStorage.getItem("isLoggedIn"),
    }
  }

 update () {
   this.forceUpdate();
 }

 checkIfLoggedIn() {
      if (localStorage.getItem("isLoggedIn") == true) {
      this.setState({loggedIn : true});
      console.log('executed')
      console.log(this.state.loggedIn)
      }
      console.log( "state :" + this.state.loggedIn)
      console.log( "storage :" + localStorage.getItem("isLoggedIn") )
      console.log ("Login checked")
  }

  render(){ 
    
  

    this.checkIfLoggedIn();
    var check =  this.state.loggedIn
    function defRoute (check){
      if (check == "true") {
        var defaultPage = HomeScreen;
        console.log(check + "check value")
        return (<HomeScreen/>)
      
      }
      else {
       var  defaultPage = LoginScreen
       console.log(check + "check value")
       return (<LoginScreen/>)
      }
    }

  return (
    <div>
    <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={defRoute(check)} />
        <Route path="/HomeScreen" element={<HomeScreen/>}></Route>
        <Route path="/home" element={<home/>}></Route>
        <Route path="/record" element={<record/>}></Route>
        <Route path="/user" element={<user/>}></Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
  </div>
  );

  }
}

export default App


