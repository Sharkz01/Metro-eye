import React from 'react';
import { firestore } from './Firebase';
import {button} from 'react';
import { Link } from 'react-router-dom';
import HomeScreen from  './HomeScreen';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from './Assets/MetroEye_.jpg';


function displayValues (forceNum, password) {
          console.log(forceNum);
          console.log(password)
}
function storeValues  (forceNum, password) {
  if (forceNum != null && forceNum != " "  && forceNum != "" && password !=  " " && password != " " && password != ""){
     
    const mailVar = forceNum + "@metroeyeza.com";
    const auth = getAuth();
    signInWithEmailAndPassword(auth, mailVar, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       // console.log("This User Has Logged In Perfectly")
       // console.log(user.passoword)
        // ...
         ///Get Data From  'Admin' document from 'User' Collection 
   var docRef = firestore.collection("User").doc(forceNum);
   console.log ("getData Function Is Working");
   docRef.get().then((doc) => {
   if (doc.exists) {
       console.log("Document data:", doc.data());
        let currentData = [];
        currentData.push(doc.data());
     // console.log(currentData[0].password)
     // console.log(password)
      if(userCredential){
          localStorage.setItem("fNum", forceNum);
          localStorage.setItem("p", password);
          localStorage.setItem("isLoggedIn", true)
           //console.log("Executed Store Values")
          

          window.location.reload();
      }
      else{
       
       document.getElementById("updateDiv").innerHTML = "Incorrect Password";
       toggleDiv();
       // console.log("Incorrect Email or Password")
 
      }
       
   } else {
     
       // doc.data() will be undefined in this case
       document.getElementById("updateDiv").innerHTML = "User does not exist";
      // console.log("Incorrect Email");
       toggleDiv();
       
   }
   }).catch((error) => {
     document.getElementById("updateDiv").innerHTML = "Database error";
     toggleDiv();
   //console.log("Error getting document:", error);
    });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        if(errorMessage){
          let text = errorMessage.substr(10);
          document.getElementById("updateDiv").innerHTML = text;
          toggleDiv();
        }

       
       
      });
    
    
   
  }else {
   document.getElementById("updateDiv").innerHTML = "Make sure all fields are filled";
    toggleDiv();
     }
   }
 

function toggleDiv() {
    var x = document.getElementById("updateDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "block";
    }
    console.log('toggled')
  }


function LoginScreen () {
  
  var warninStyle = {
    display : "none",
    color : "red"
  }

          return (
            
        <div className="App" style ={{textAlign: "center", alignItems: 'center', justifyContent: 'center',}} > 
          <br />
          <br />
          <br />
            <img src={logo} alt="Logo" style={{ width: 300, height: 150 }} />  
          <br />
          <br />

          <div> <h3>Login</h3></div>
          <br />
          
          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off">
    
              <TextField id="force_number_input" label="   Force No" variant="outlined"/>
              <TextField id="password_input" label="   Password" variant="outlined"   />

          </Box>
         
          <br />

          

         <div>
          <Button variant="outlined" onClick={(() => storeValues( document.getElementById("force_number_input").value, document.getElementById("password_input").value )) } >Login</Button>
         </div>

         <div id="updateDiv" style={warninStyle} >
            <p>Email/Password incorrect</p>
         </div>
          <br />
     

     
        </div>
            
         );
   }


export default LoginScreen;

