import React, { useState } from 'react';
import 'firebase/auth';
import {useFirebaseApp, useStorage, useUser} from 'reactfire';
import {Form,FormGroup, Alert, Button,ButtonGroup, Row, Col, Container,InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';
import logo from './imagenes/logo.png';
import firebase from './firebase-config.js';


export default (props)=>{

    const user = useUser();
    const [movil, setMovil] = useState('');
    const [kilometraje, setKilometraje] = useState('');
    const [chofer, setChofer] = useState('');
    const [acomp, setAcomp] = useState('');

 
//Declaración del array de 33 posiciones
    var nuevoArray = new Array(33);
//Bucle para meter en cada posición otros array de 10
    for(var i=0; i<31; i++) {
    nuevoArray[i] = new Array(2);
    }

    function test(operad){
        
        var operador = operad;
        /* var movil = document.getElementById("movil");
        var kilometraje = document.getElementById("kilometraje");
        var chofer = document.getElementById("chofer");
        var acomp = document.getElementById("acomp"); */

        console.log(operador);
       /*  console.log(movil);
        console.log(kilometraje);
        console.log(chofer);
        console.log(acomp); */


    }
    function test2(){
        for(var i=0; i<31; i++) {
            console.log("EL array trae " + nuevoArray[i][0]);
            } 
    }

    function AddChecklist(){
        var operador = document.getElementById("operador");
        var movil = document.getElementById("movil");
        var kilometraje = document.getElementById("kilometraje");
        var chofer = document.getElementById("chofer");
        var acomp = document.getElementById("acomp");
        if(movil){
            firebase.firestore().collection('ChecklistMoviles').add( 
            {
            Operador:operador,
            Movil: movil,
            kilometraje:kilometraje,
            chofer:chofer,
            Acomp:acomp
            })
            return;
        } }
    /*    DANI   Habría que repensar esta parte, la verdad no la entendi como para "repararla"
        const onCheckboxBtnClick = (selected) => {
            const index = cSelected.indexOf(selected);
            if (index < 0) {
              cSelected.push(selected);
            } else {
              cSelected.splice(index, 1);
            }
            setCSelected([...cSelected]);
          }
          */

      return(
<Container>
       <Row>
        <Col>
<FormGroup>
   
            <p> 
                <b>CHECKLIST: </b><br />
                <Alert color="secondary">
                <Input placeholder="Numero de movil" type="number" id="movil" ></Input>{'   '}
                <Input placeholder="Kilometraje" type="number" id="kilometraje"></Input>{'    '}
                <Input placeholder="Chofer"id="chofer" ></Input>{'    '}
                <Input placeholder="Acompañante" id="acomp"></Input>{'    '}
                </Alert>
            </p>     
             <p>
                <b>NIVEL DE REFRIGERANTE O DEPOSITO DE AGUA: </b>
                 
                <ButtonGroup>               
                <Button outline color="success" onClick={() => nuevoArray[0][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[0][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>     
            <p>
                <b>TAPA DE DEPOSITO, CIERRA BIEN?: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[1][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[1][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>MATAFUEGO // SUELTO // VENCIMIENTO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[2][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[2][0] = "NO"}>NO</Button>
                <Input type="date"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>KIT DE SEGURIDAD (GUANTES/BALIZAS/BOTIQUIN/CHALEO): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[3][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[3][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>KIT DE PROTECCION (BARBIJO/GUANTES DE LATEX/GAFAS): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[4][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[4][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>LUZ DE RETROCESO Y DE FRENO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[5][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[5][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>LUCES ALTAS, BAJAS Y DE POSICIÓN (BALIZAS, GIROS): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[6][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[6][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>NIVEL DE ACEITE: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[7][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[7][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CUBIERTA DE AUXILIO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[8][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[8][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>ESPEJOS RETROVISORES Y BOCINA: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[9][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[9][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CRICKET Y LLAVE DE RUEDA: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[10][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[10][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CHEQUEAR CONDICIÓN GENERAL: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[11][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[11][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>REVISAR PANEL DE CONTROL POR DAÑO O MAL FUNCIONAMIENTO (INDICADORES DE TABLEROS): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[12][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[12][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>ORDEN Y LIMPIEZA DEL INTERIOR: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[13][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[13][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CALEFACCIÓN: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[14][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[14][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>AIRE ACONDICIONADO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[15][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[15][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>ASIENTOS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[16][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[16][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>AGUJEROS EN EL PISO//ALFOMBRAS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[17][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[17][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CINTURON DE SEGURIDAD  del / tras/ y traba: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[18][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[18][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>ESCOBILLA LIMPIAPARABRISAS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[19][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[19][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CONDICIÓN GENERAL DE NEUMÁTICOS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[20][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[20][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CÁMARAS OPERATIVAS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[21][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[21][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>MONITOR: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[22][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[22][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>OBLEA DE GNC (FECHA VENCIMIENTO): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[23][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[23][0] = "NO"}>NO</Button>
                <Input type="date"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>VTV    (FECHA DE VENCIMIENTO): </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[24][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[24][0] = "NO"}>NO</Button>
                <Input type="date"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>TASAS DE RUEDAS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[25][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[25][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>DOCUMENTACION DEL MOVIL CEDULA/SEGURO/TARJ.GNC: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[26][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[26][0] = "NO"}>NO</Button>
                <Input type="date"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>RADIO HT: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[27][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[27][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>STÉREO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[28][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[28][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>MICROPERFORADO: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[29][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[29][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>CERRADURAS: </b><ButtonGroup>
                <Button outline color="success" onClick={() => nuevoArray[30][0] = "SI"}>SI</Button>
                <Button outline color="danger" onClick={() => nuevoArray[30][0] = "NO"}>NO</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>GNC (LUCES): </b><ButtonGroup>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 0}>0</Button>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 1}>1</Button>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 2}>2</Button>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 3}>3</Button>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 4}>4</Button>
                <Button outline color="primary" onClick={() => nuevoArray[30][0] = 5}>5</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
            <p>
                <b>NAFTA: </b><ButtonGroup>
                <Button outline color="primary" onClick={() => nuevoArray[31][0] = "1/4"}>1/4</Button>
                <Button outline color="primary" onClick={() => nuevoArray[31][0] = "2/4"}>2/4</Button>
                <Button outline color="primary" onClick={() => nuevoArray[31][0] = "3/4"}>3/4</Button>
                <Button outline color="primary" onClick={() => nuevoArray[31][0] = "4/4"}>4/4</Button>
                <Input placeholder="Observaciones"></Input>
                </ButtonGroup>
            </p>
             
             <Button type="submit" outline-color="Alert" onClick={test(user.email)}>ENVIAR</Button>
             <Button type="submit" outline-color="Alert" onClick={test2}>Test2</Button>
            
            </FormGroup>
           
        </Col>
        </Row>
        
        </Container>
      )
     
}