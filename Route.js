import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './LoginScreen';
//import SignUp from './SignUp';
//import ForgotPasswordPage from './ResetPasswordPage'


function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route exact path="/" component={SignIn} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;