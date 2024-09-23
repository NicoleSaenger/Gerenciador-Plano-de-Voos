//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//----------------------------------- Classe Aeronave -----------------------------------


export class Aeronave {
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;

    constructor(prefixo, velocidadeCruzeiro, autonomia) {
        //Validação dos tipos de dados
        validate(arguments, ["string", "number", "number"]);

        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
        
    }

    //Métodos getter para resgatar os valores
    get prefixo() {
        return this.#prefixo;
    }

    get velocidadeCruzeiro() {
        return this.#velocidadeCruzeiro;
    }

    get autonomia() {
        return this.#autonomia;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Prefixo: ${this.prefixo}\nVelocidade Cruzeiro: ${this.velocidadeCruzeiro}\nAutonomia: ${this.autonomia}\nTipo: ${this.tipo}\n`;
    }
}