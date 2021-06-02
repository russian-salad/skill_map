import React from 'react';
import Button from '@material-ui/core/Button';


export default function myButton(props) {
return(
    <Button style={props.style} onClick={props.handleClick} variant="outlined" color="primary">
        {props.text}
    </Button>
 )
}