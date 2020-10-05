import React,{useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useStorage, useUser} from 'reactfire';
import {Form,FormGroup, Button,ButtonGroup, Row, Col, Container,InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';
import logo from './imagenes/logo.png';
import firebase from './firebase-config.js';
import ChecklistMoviles from './ChecklistMoviles';




export default (props)=>{
    const firebase =useFirebaseApp();
    const user = useUser();
    const [display, mostrarElemento] = useState(false);
    
  
    


    const logout = async ()=>{
        await firebase.auth().signOut();
    }
    const newLocal = "2000px";
    const usuarios = [];

    function checklistMoviles (){
        if(display == false){
        mostrarElemento(true);
        }else{
            mostrarElemento(false);
        }
    }

  function obtenerDatosUser(correo){
    firebase.firestore().collection('Users').where('correo','==',correo).get()
    .then(snapshot => {
        if(snapshot.empty){
            console.log('no User');
            return;
        }
        snapshot.forEach(doc =>{
            const datos = [(doc.id ,'=>', doc.data())];
           console.log(datos);
            
        });
  }).catch(err => {
      console.log('Error',err);
  });
}


let componente;
if(display){
    //mostrar error
    componente = <ChecklistMoviles></ChecklistMoviles>
       


}else{
    //no mostrar nada
    componente = null;
}



    
    return(
        <div>
             {user && 
             <Container style={{ padding:"1%", maxWidth:"2000px "}}>
             <Row style={{backgroundColor:"gray"}}>
                 <Col ><b>{user.email} {'   '} </b>
                
              
                    <Button color="secondary" size="sm" onClick={logout}> <b>Cerrar Sesion</b> </Button>
                </Col>
             </Row>
             <Row>
                 <Col >
                 <br />
                 <b><Button color="secondary" size="sm" onClick={checklistMoviles}> <b>Checklist Moviles</b> </Button></b>
                
                </Col>
             </Row>
             <Row>
                 <Col > 
                    <br></br>
                     {componente}                
                </Col>
             </Row>


             
             </Container>
             }
        </div>
    )
}