//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";

import { ServicoPiloto } from './servicoPilotos.js';


//----------------------------------- Classe Piloto -----------------------------------


export class Piloto {
    #nome;
    #matricula;
    #habilitacaoAtiva;

    constructor() {
      this.#nome = null;
      this.#matricula = null;
      this.#habilitacaoAtiva = null;
  }

      //Adiciona um piloto
      addPilot({ matricula, nome, habilitacaoAtiva }) {
        //Validação dos tipos de dados
        validate({ matricula, nome, habilitacaoAtiva }, {
          matricula: 'string',
          nome: 'string',
          habilitacaoAtiva: 'boolean'
        });
    
        //Inicializa propriedades
        this.#nome = nome;
        this.#matricula = matricula;
        this.#habilitacaoAtiva = habilitacaoAtiva;
        
    }

    //Métodos getter para resgatar os valores
    get matricula() {
        return this.#matricula;
    }

    get nome() {
        return this.#nome;
    }

    //Retorna ativa ou inativa com base no valor booleano
    get habilitacaoAtiva() {
      return this.#habilitacaoAtiva;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Matrícula: ${this.#matricula}\nNome: ${this.#nome}\nHabilitação Ativa: ${this.#habilitacaoAtiva}`;
    }

}