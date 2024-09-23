//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//----------------------------------- Classe Aerovia -----------------------------------


export class Aerovia {
    #id;
    #origem;
    #destino;
    #tamanho;

    constructor(id, origem, destino, tamanho) {

        // Validação dos tipos de dados
        try {
            validate(arguments, ['string', 'string', 'string', 'number']);
        } catch (error) {
            throw new Error(`Erro na validação dos argumentos: ${error.message}`);
        }

        //Validação para não ter tamanhos negativos
        if (tamanho <= 0) {
            throw new Error('O tamanho deve ser um número positivo.');
        }

            this.#id = id;
            this.#origem = origem;
            this.#destino = destino;
            this.#tamanho = tamanho;
    }

    //Métodos getter para resgatar os valores
    get id() {
        return this.#id;
    }

    get origem() {
        return this.#origem;
    }

    get destino() {
        return this.#destino;
    }

    get tamanho() {
        return this.#tamanho;
    }

    //Método toString para retornar as informações em texto
    toString() {
        return `ID: ${this.id}\nOrigem: ${this.origem}\nDestino: ${this.destino}\nTamanho: ${this.tamanho}\n`;
    }
}