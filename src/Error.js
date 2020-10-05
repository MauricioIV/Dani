import React from 'react';
import {Alert} from 'reactstrap';
function Error({mensaje}){

    return(

        <Alert color="danger">{mensaje}</Alert>
    )
}
export default Error;