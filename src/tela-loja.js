import React from 'react';
import './App.css';
import Loja from './loja.jpg';
import Mapa from './mapa.png';

function Coco(){
    return(
        <div class="loja">
        <img src={Loja} class='./loja.jpg' alt="logos" height={350} width={390}></img>
        <div class="nome">
        <h4> Coco & Lola </h4> 
        <br></br>
        <h5>Localização: R.Wanderley Pinho, 517-</h5>
        <h5>Itaigara, Salvador - BA, 452875-270</h5>
        <br></br>
        <h5>Horário de funcionamento: 08:00 - 10:00</h5>
       <br></br>
       <br></br>
       <button class="custom-button"><a href="/Cocoss">Conhecer mais</a></button>
       
       
       
                     


<div class="inside">
        <img src={require ('./inside.jpg')} class='./inside.jpg' alt="inside" height={660} width={540}></img>
        </div>
    </div>
</div>

    )
}

export default Coco;