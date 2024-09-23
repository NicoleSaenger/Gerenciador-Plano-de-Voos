//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importa classe AeronaveComercial
import { AeronaveComercial } from "./aeronaveComercial.js";


//----------------------------------- Classe AeronaveCarga -----------------------------------


//Utiliza o extends para identificar como subclasse de AeronaveComercial
export class AeronaveCarga extends AeronaveComercial {
    #pesoMax;

    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, pesoMax) {
        //Validação dos tipos de dados
        validate(arguments,["string","number","number","string","number"]);
        
        //Chama o construtuor da classe base (AeronaveComercial)
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);

        //Atribuição da nova instância
        this.#pesoMax = pesoMax;

    }

    //Métodos getter para resgatar os valores
    get pesoMax() {
        return this.#pesoMax;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Prefixo: ${this.prefixo}\nVelocidade Cruzeiro: ${this.velocidadeCruzeiro}\nAutonomia: ${this.autonomia}\nTipo: ${this.tipo}\nNome Companhia: ${this.nomeCIA}\nPeso Max: ${this.pesoMax}\n`;
    }

}