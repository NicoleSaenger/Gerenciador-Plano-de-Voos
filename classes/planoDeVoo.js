//Importa biblioteca bycontract
import { validate } from "bycontract";


//----------------------------------- Classe Plano de Voo -----------------------------------


export class PlanoDeVoo {
    #id;
    #matriculaPiloto;
    #idAerovia;
    #data;
    #altitude;
    #slots;
    #cancelado;
    #servicoPiloto;


    constructor(id, matriculaPiloto, idAerovia, data, altitude, servicoPiloto) {
        //Validação dos tipos de dados
        validate(arguments, ["string", "string", "string", "object", "number", "object"]);


        if (!servicoPiloto.existePiloto(matriculaPiloto)) {
            throw new Error('Piloto não encontrado...');
          }


        //Garante que a data seja do tipo date
        if (!(data instanceof Date)) {
            throw new Error("Data deve ser um objeto Date válido.");
        }
  

        //Inicializa as propriedades do plano de voo
        this.#id = id;
        this.#matriculaPiloto = matriculaPiloto;
        this.#idAerovia = idAerovia;
        this.#data = data;
        this.#altitude = altitude;
        this.#slots = []
        this.#servicoPiloto = servicoPiloto;
    }


    //Métodos getter para resgatar os valores
    get id() {
        return this.#id;
    }

    get matriculaPiloto() {
        return this.#matriculaPiloto;
    }

    get idAerovia() {
        return this.#idAerovia;
    }

    get data() {
        return this.#data;
    }

    //Formata o horário com base na data informada
    get horario() {
        return `${this.#data.getHours()}:${this.#data.getMinutes()}`;
    }

    get altitude() {
        return this.#altitude;
    }

    get slots() {
        return this.#slots;
    }


    get cancelado() {
        return this.#cancelado;
    }

    get servicoPiloto() {
        return this.#servicoPiloto;
    }

    //Recebe por parâmetro a confirmação do plano e altera o cancelamento, invertendo o valor de confirmação p true
    set ativaPlano(confirmacao) {
        this.#cancelado = !confirmacao;
    }

    //Adiciona os slots a lista de slots ocupados
    adicionarSlotOcupado(slot) {
        this.#slots.push(slot);
    }
    
    //Remove um slot de horário ocupado
    removerSlotOcupado(slot) {
    //Procura pelo índice do slot na array
    const index = this.#slots.indexOf(slot);
    //Se for encontrado, é removido através do splice
    if (index !== -1) {
        this.#slots.splice(index, 1);
        }
    }
      
    //Verifica se slot específico está ocupado
    isSlotOcupado(slot) {
    return this.#slots.includes(slot);
    }


    //Retorna o objeto do plano de voo para acessar ou manipular diretamente
    plano() {
        return {
            id: this.#id,
            matriculaPiloto: this.#matriculaPiloto,
            idAerovia: this.#idAerovia,
            data: this.#data,
            horario: this.horario,
            altitude: this.#altitude,
            slots: this.#slots,
            cancelado: this.#cancelado,
            servicoPiloto: this.#servicoPiloto
        }

    };

    
    //Método toString para retornar as informações em texto
    toString() {
        return `Plano de Voo: 
            \nID: ${this.id} 
            \nPiloto: ${this.matriculaPiloto} 
            \nIDAerovia: ${this.idAerovia} 
            \nData: ${this.data.toLocaleDateString()} 
            \nHorário: ${this.horario}h 
            \nAltitude: ${this.altitude} pés
            \nSlots: ${this.slots}
            \nCancelado: ${this.cancelado}`
    }
}
