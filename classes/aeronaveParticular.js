//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importa classe Aeronave
import { Aeronave } from "./aeronave.js";


//----------------------------------- Classe AeronaveParticular -----------------------------------


//Utiliza o extends para identificar como subclasse de Aeronave
export class AeronaveParticular extends Aeronave {
    #respmanutencao;

    constructor(prefixo, velocidadeCruzeiro, autonomia, respmanutencao) {
        //Validação dos tipos de dados
        validate(arguments,["string","number","number","string"])

        // Chama o construtor da classe base (Aeronave)
        super(prefixo, velocidadeCruzeiro, autonomia);

        // Atribuição do novo atributo
        this.#respmanutencao = respmanutencao;

    }

    //Métodos getter para resgatar os valores
    get respmanutencao() {
        return this.#respmanutencao;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `Prefixo: ${this.prefixo}\nVelocidade Cruzeiro: ${this.velocidadeCruzeiro}\nAutonomia: ${this.autonomia}\nTipo: ${this.tipo}\nResponsável Manutenção: ${this.respmanutencao}\n`;
    }

}