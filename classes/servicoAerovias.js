//Importa classe Aerovia
import { Aerovia } from './aerovia.js';


//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//----------------------------------- Classe ServicoAerovias  -----------------------------------
 

export class ServicoAerovias {
    #aerovias;

    constructor() {
        //Inicia lista para aerovias
        this.#aerovias = [];
    }


    //Getter mapeia cada objeto do array e retorna formatado pelo toString
    get aerovias() {
        return this.#aerovias.map(aerovia => aerovia.toString());
    }


    //Adiciona nova aerovia
    addAerovia(novaAerovia) {
      //Verifica se é instância da classe Aerovia
      if (novaAerovia instanceof Aerovia) {
        //Adiciona ao array
        this.#aerovias.push(novaAerovia);
      } else {
        throw new Error("Este objeto não é uma aerovia...");
      }
    }


    //Verifica se exite pelo menos uma aerovia pelo id informado
    existeAerovia(idAerovia) {
      return this.#aerovias.some(aerovia => aerovia.id === idAerovia);
    }
  
  //Resgata aerovia pelo id informado
  getAeroviaById(idAerovia) {
    return this.#aerovias.find(aerovia => aerovia.id === idAerovia);
  }
}