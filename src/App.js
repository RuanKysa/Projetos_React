import React, { Component } from 'react';
import './estilo.css';

import biscoito from './assets/biscoito.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frase = [
     'Siga os bons e aprenda com eles',
     'O bom-senso vale mais que muito conhecimento',
     'O riso é a menor distãncia entre duas pessoas', 
     'Deixe de lado as preocupações e seja feliz',
     'Realize o óbvio, pense no improvável e conquiste o impossivel',
     'Acredite em milagres mas não dependa deles', 
     'A maior barreira para o sucesso é o medo do fracasso'];
  }
  quebrarBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state);
  }
}