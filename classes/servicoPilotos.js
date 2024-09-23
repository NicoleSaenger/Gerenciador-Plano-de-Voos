//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importa classe Piloto
import { Piloto } from './piloto.js';


//----------------------------------- Classe ServicoPilotos  -----------------------------------


export class ServicoPilotos {
    
    //Campo que armazena lista de pilotos
    #pilotos;
    //Garante que seja criada apenas uma lista
    static instance; 

    constructor() {
        //Verifica se já existe uma instância da classe criada
        if (ServicoPilotos.instance) {
        return ServicoPilotos.instance;
        }

        //Se não existir instância prévia, inicia array
        this.#pilotos = [];
        ServicoPilotos.instance = this;
    }

    //Verifica existência de piloto por seu ID
    pilotoExiste(matricula) {
        return this.#pilotos.some(piloto => piloto.matricula === matricula);
    }

    //Getter mapeia cada objeto do array e retorna formatado pelo toString
    get pilotos() {
        return this.#pilotos.map((piloto) => piloto.toString());
    }

    //Adiciona um novo piloto a lista!!
    addPiloto(novoPiloto) {
        //Valida se é objeto
        validate(arguments, ["object"]);
        //Verifica se é instância da classe Piloto
        if (novoPiloto instanceof Piloto) {
            //Verifica se tem habilitação ativa
            if (novoPiloto.habilitacaoAtiva) {
                //Verifica se já existe piloto com a mesma matrícula
                if (!this.pilotoExiste(novoPiloto.matricula)) {
                    //Passando pelas validações, adiciona a lista!
                    this.#pilotos.push(novoPiloto);
            } else {
                console.warn(`Piloto com matrícula ${novoPiloto.matricula} já existe.`);
            }
        } else {
            console.info("O Piloto deve ter a habilitação ativa para fazer parte do Serviço.");
        }
    } else {
        throw new Error("Algo deu errado, você tem certeza que está tentando cadastrar um piloto?");
     }
    }
    
  //Verifica existência do piloto pela matrícula
  existePiloto(matricula) {
    return this.#pilotos.some(piloto => piloto.matricula === matricula);
  }
}