//Importando classe Aeronave
import { Aeronave } from "./aeronave.js";


//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//----------------------------------- Classe ServicoAeronaves  -----------------------------------


export class ServicoAeronaves {
    #aeronaves;

    constructor() {
        //Cria array vazia para as aeronaves
        this.#aeronaves = [];
      }
      
      //Getter mapeia cada objeto do array e retorna formatado pelo toString
      get aeronaves() {
      return this.#aeronaves.map(aeronave => aeronave.toString());
      }

    

    //Adiciona nova aeronave ao array 
    addAeronave(novaAeronave) {
        //Verifica se é um objeto       
        validate(arguments,["object"])
          //Verifica se é instância de Aeronave
          if (novaAeronave instanceof Aeronave) {
            //Adiciona a array de aeronaves
            this.#aeronaves.push(novaAeronave);
          } else {
            throw new Error("Este objeto não é uma aeronave");
          }
      }


      //Verifica se aeronave com prefixo específico está na lista
      verificarAeronave(prefixo) {
      //O some busca por pelo menos uma
      return this.#aeronaves.some(aeronave => aeronave.prefixo === prefixo);
      }
      

      //Retorna aeronave com base no prefixo
      obterAeronave(prefixo) {
      //Verifica se exuste aeronave com tal prefixo
      let aeronaveEncontrada = this.#aeronaves.find(aeronave => aeronave.prefixo === prefixo);

      // Retorna a aeronave encontrada ou null se não encontrada
      return aeronaveEncontrada || null;
    }

}