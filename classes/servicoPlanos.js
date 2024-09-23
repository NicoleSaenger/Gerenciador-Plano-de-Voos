// Importa biblioteca bycontract
import { validate } from "bycontract";

// Importa classe PlanoDeVoo
import { PlanoDeVoo } from "./planoDeVoo.js";



//----------------------------------- Classe ServicoPlanos -----------------------------------


export class ServicoPlanos {
    //Campo que armazena lista de planos de voos
    #planos;
    //Garante que seja criada apenas uma lista  
    static instance;

    constructor() {
      //Verifica se já existe uma instância da classe criada
      if (ServicoPlanos.instance) {
        return ServicoPlanos.instance;
      }
      
      //Se não existir instância prévia, inicia array
      this.#planos = [];
      ServicoPlanos.instance = this;
    }


    //Getter mapeia cada objeto do array e retorna formatado pelo toString
    get planos() {
        return this.#planos.map(plano => plano.toString());
    }


    //Adiciona um novo pano de voo a lista!!
    addPlano(novoPlano) {
        //Verifica se é instância de PlanoDeVoo      
        if (!(novoPlano instanceof PlanoDeVoo)) {
          throw new Error("Você está tentando adicionar um objeto que não é um PlanoDeVoo.");
        }
        //Passando pelas validações, adiciona a lista!
        this.#planos.push(novoPlano);
      }


      //Verifica a existência de um plano pelo ID informado
      existePlano(id) {
          //Filter cria novo array apenas com os planos que coincidem o ID
          const planosEncontrados = this.#planos.filter(plano => plano.id === id);
          if (planosEncontrados.length > 0) {
              //Se encontrar, utiliza o toString 
              return planosEncontrados.map(plano => plano.toString());
          } else {
              throw new Error(`Plano de voo com ID ${id} não encontrado...`);
          }
      }


      //Recupera plano de voo por ID fornecido
      findPlano(id) {
          //Utiliza find para resgatar o primeiro resultado encontrado
          const planoEncontrado = this.#planos.find(plano => plano.id === id);
          if (planoEncontrado) {
            return planoEncontrado;
          } else {
            throw new Error(`Plano de voo com ID ${id} não encontrado...`);
          }
        }
    }
