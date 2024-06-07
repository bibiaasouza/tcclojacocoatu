import React from 'react';
import './coco&lola.css';
import Loja from './loja.jpg';
import Navbar from './Navbar';
import { Button, Form} from 'react-bootstrap';

function Coko(){
    return(
        <div class="store">
        <img src={Loja} class='./loja.jpg' alt="store" height={350} width={390}></img>
        <div class="letreiro">
        <h4> Coco & Lola </h4>
        </div>
</div>
        )
}

export default Coko;