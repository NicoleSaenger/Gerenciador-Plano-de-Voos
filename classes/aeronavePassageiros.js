//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importa classe AeronaveComercial
import { AeronaveComercial } from "./aeronaveComercial.js";


//----------------------------------- Classe AeronavePassageiros -----------------------------------


//Utiliza o extends para identificar como subclasse de AeronaveComercial
export class AeronavePassageiros extends AeronaveComercial {
    #maxPassageiros;

    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, maxPassageiros) {
    
        //Validação dos tipos de dados
        validate(arguments,["string","number","number","string","number"])
    
        //Chama o construtuor da classe base (AeronaveComercial)
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);

        //Atribuição da nova instância
        this.#maxPassageiros = maxPassageiros;

    }

    //Métodos getter para resgatar os valores
    get maxPassageiros() {
        return this.#maxPassageiros;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Prefixo: ${this.prefixo}\nVelocidade Cruzeiro: ${this.velocidadeCruzeiro}\nAutonomia: ${this.autonomia}\nTipo: ${this.tipo}\nNome Companhia: ${this.nomeCIA}\nMáximo Passageiros: ${this.maxPassageiros}\n`;
    }

}