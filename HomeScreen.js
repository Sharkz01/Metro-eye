import React from 'react';
import { button } from 'react';
import { firestore } from './Firebase';
import Sidebar from './components/sidebar/sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import homescreen from "./homescreen.scss";
class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            newfirstname: "",
            newlastname: "",
        }
    };

    getData = () => {
        ///Get Data From  'Admin' document from 'User' Collection 
        var docRef = firestore.collection("User").doc(localStorage.getItem("fNum"));
        console.log("getData Function Is Working");
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

    componentDidMount() {
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
            <div className='Home'>
                <><Sidebar /><>

                    <div className='main'>
                       <div style={{ textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>
                            {this.state.userData.map(data => {
                                return (
                                    <div>
                                        <br />

                                        <p key={data.name}>This is the Test Home screen.</p>
                                        <p key={data.name}>To confirm Login Is Working</p>
                                        <p key={data.name}>To confirm Database Is Working</p>
                                        <p key={data.name}>To confirm Data Is Imported</p>
                                        <p key={data.name}>Mock Data Below</p>
                                        <p key={data.name}>Name: {data.name}</p>
                                        <p key={data.surname}>Surname: {data.surname}</p>
                                        <p key={data.age}>Age: {data.age}</p>

                                        <p>Logged In</p>


                                        <div>
                                            <button variant="outlined" onClick={this.logout}>Logout</button>
                                        </div>

                                    </div>

                                );
                            })}

                        </div>

                    </div>




                </></>
            </div>



        );
    }
}

export default HomeScreen;
