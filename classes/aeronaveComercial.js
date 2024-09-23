//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importa classe Aeronave
import { Aeronave } from "./aeronave.js";


//----------------------------------- Classe AeronaveComercial -----------------------------------


//Utiliza o extends para identificar como subclasse de Aeronave
export class AeronaveComercial extends Aeronave {
    #nomeCIA;

    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA) {
        //Validação dos tipos de dados
        validate(arguments,["string","number","number","string"]);
            
        //Chama o construtuor da classe base (Aeronave)
        super(prefixo, velocidadeCruzeiro, autonomia);

        //Atribuição da nova instância
        this.#nomeCIA = nomeCIA;

    }

    //Métodos getter para resgatar os valores
    get nomeCIA() {
        return this.#nomeCIA;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Prefixo: ${this.prefixo}\nVelocidade Cruzeiro: ${this.velocidadeCruzeiro}\nAutonomia: ${this.autonomia}\nTipo: ${this.tipo}\nNome Companhia: ${this.nomeCIA}\n`;
    }

}