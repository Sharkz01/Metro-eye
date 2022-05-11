import React from 'react';
import {button} from 'react';
import { firestore } from './Firebase';

class HomeScreen extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={ 
            userData: [],
           newfirstname: "",
           newlastname:"",
        }  
    }; 

    getData = () => {
        ///Get Data From  'Admin' document from 'User' Collection 
      var docRef = firestore.collection("User").doc(localStorage.getItem("fNum"));
      console.log ("getData Function Is Working");
      docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
           let currentData = [];
           currentData.push(doc.data());
           this.setState({ userData: currentData }); 
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
      }).catch((error) => {
      console.log("Error getting document:", error);
       });
     }

     componentDidMount(){
        var getme = this.getData();
       // var toggleMe = this.toggleDiv()     
     }
    
     logout = () => {
        localStorage.removeItem('fNum');
        localStorage.removeItem('p');
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
      }
    
     render() {
        return (
          
           <div style = {{textAlign : "center" , alignItems: 'center', justifyContent: 'center'}} >
               {this.state.userData.map(data => {
                   return(
                    <div>
                    <br />
                    <br />
                    <br />
                    <br />
                        <p key={data.name}>{data.name}</p>
                        <p key={data.surname}>{data.surname}</p>
                        <p key={data.age}>{data.age}</p>
                        <p >Logged In</p>
    
                        <button onClick={this.logout }>log out</button>
                    
                </div>
                );
               })}

           </div>


          );
   }
}

export default HomeScreen;