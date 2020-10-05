import React,{useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import userEvent from '@testing-library/user-event';
import {Form,FormGroup, Alert, Button, Row, Col, Container,InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';
import logo from './imagenes/logo.png';
import Error from './Error.js';
import firebase from './firebase-config.js';

function AddUser(correo){
    firebase.firestore().collection('Users').where(correo,'==',true).get()
    .then(snapshot => {
      if (snapshot.empty){
        firebase.firestore().collection('Users').add( 
        {
        Name:'Daniel',
        Apellido: 'Berardi',
        Legajo:'2271',
        type:'ADMIN',
        correo: correo
        })
        return;
    }
    snapshot.forEach(doc => {
        console.log(doc.id,'=>',doc.data());
    });
})
    .catch(err => {console.log("no existe",err);});
}



export default (props)=>{
    const [email,setEmail ] =useState(''); 
    const [password,setPassword] = useState('');
    const [error,guardarError] = useState(false);
   
    const firebase =useFirebaseApp();
    const user = useUser();
    const submit = async() =>{
      await  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(firebaseUser) {
        // Success 
        console.log("Login Success");
        guardarError(false);
        AddUser(email);
    })
   .catch(function(error) {
        // Error Handling
        guardarError(true);
   });
      
    }
     
    const login = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
            // Success 
            console.log("Login Success");
            guardarError(false);
        })
       .catch(function(error) {
            // Error Handling
            guardarError(true);
       });
        
    }
    const logout = async ()=>{
        await firebase.auth().signOut();
    }


    //CONDICIONAL
    let componente;
    if(error){
        //mostrar error
        componente = <Error mensaje={'ERROR'} />
   

    }else{
        //no mostrar nada
        componente = null;
    }



    return(
        <div className="Login">
            <Container style={{paddingTop:"10%"}} >
            {!user && 
            <Row>
                <Col sm="12" md="6" lg="6"style={{ borderRightStyle:"double",borderRightColor:"lightgray"}}>
                    <img src={logo} alt="logo" width="200px" style={{opacity:"50%", margin:"auto", display:"flex", marginBottom:"3%"}}></img>
                    <h1 style={{opacity:"50%"}}>Intranet</h1>
                    </Col>
                
                <Col sm="12" md="6" lg="6"  style={{alignSelf:"center"}}>           
            
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Usuario</InputGroupText>
                </InputGroupAddon>
            <Input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value)}/>
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Contraseña</InputGroupText>
                </InputGroupAddon>
            <Input type="password" id="password"  onChange={ (ev)=> setPassword(ev.target.value)}/>
            </InputGroup>
            <br></br>
            <Button color="secondary" onClick={submit}>Registrarse</Button>{'  '}
            <Button color="primary" onClick={login}>Iniciar Sesion</Button>
            <Row><Col><br />{componente}</Col></Row> 
            <br />

            
                </Col>
                
            </Row>
           
            }
            
            </Container>
            
        </div>
    )
}