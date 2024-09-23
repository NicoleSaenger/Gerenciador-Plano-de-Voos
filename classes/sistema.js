//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//Importando classes necessárias
import { ServicoAerovias } from './servicoAerovias.js';
import { OcupacaoAerovia } from './ocupacaoAerovia.js';
import { ServicoPlanos } from './servicoPlanos.js';
import { ServicoAeronaves } from './servicoAeronaves.js';
import { ServicoPilotos } from './servicoPilotos.js';
import { Piloto } from './piloto.js';
import { Aerovia } from './aerovia.js';
import { PlanoDeVoo } from './planoDeVoo.js';
import { Aeronave } from './aeronave.js';


//----------------------------------- Sistema  -----------------------------------

export class Sistema {
  //Inicia o construtor
  constructor(servicoAerovias, servicoPilotos, servicoAeronaves, servicoPlanos, ocupacaoAerovia) {

    this.servicoAerovias = servicoAerovias;
    this.servicoPilotos = servicoPilotos;
    this.servicoAeronaves = servicoAeronaves;
    this.servicoPlanos = servicoPlanos;
    this.ocupacaoAerovia = ocupacaoAerovia;

  }


//----------------- Funcionalidade 1: Listar as aerovias existentes entre dois aeroportos -----------------

  listarAerovias() {
    try {
      //Retorna array de aerovias do servicoAerovias
      const aerovias = this.servicoAerovias.aerovias;
      console.log("Lista de Aerovias:");
      //Itera sobre a lista e imprime cada aerovia
      aerovias.forEach(aerovia => {
        console.log(aerovia); 
      });
    } catch (error) {
      console.error("Erro ao listar aerovias:", error.message);
    }
  }


//----------------- Funcionalidade 2: Listar as altitudes livres em uma determinada aerovia -----------------


  listarAltitudesLivres(idAerovia, data) {
    try {
      //Chama o método altitudesLivres da classe ocupacaoAerovia
      const altitudesLivres = this.ocupacaoAerovia.altitudesLivres(idAerovia, data);
      console.log(`Altitudes livres na aerovia ${idAerovia} para a data ${data}:`, altitudesLivres);
      //Retorna a lista
      return altitudesLivres;
    } catch (error) {
      console.error("Erro ao verificar altitudes livres:", error.message);
    }
  }
 
  //----------------- Funcionalidade 3: Submeter um plano de voo para aprovação -----------------


  submeterPlanoDeVoo(objplanodevoo, aeronave) {
    //través do prefixo, verifica existência da aeronave 
    if (!this.servicoAeronaves.verificarAeronave(aeronave.prefixo)) {
      console.log("Aeronave não encontrada");
      return null;
    }


    //Resgata a aerovia pelo ID através de método do servicoAerovias
    const aerovia = this.servicoAerovias.getAeroviaById(objplanodevoo.idAerovia); //Pega somente o iDAerovia do plano de voo 
    if (!aerovia) {
      console.log("Aerovia não encontrada");
      return null;
    }


    //Verifica se a aeronave tem autonomia suficiente! 
    const distanciaAerovia = aerovia.tamanho;
    const autonomiaNecessaria = distanciaAerovia * 1.1; //10% maior que o tamanho da aerovia


    //Caso não tenha autonomia suficiente
    if (aeronave.autonomia < autonomiaNecessaria) {
      console.log("Não há autonomia suficiente! Plano cancelado...");
      return null;
    }


    //Verifia se a aeronave é instância de passageiros
    //Verifica se altitude cumpre com os requisitos
    if ((aeronave instanceof AeronavePassageiros && objplanodevoo.altitude < 28000)) {
      console.log("Plano Recusado, aeronaves do tipo Passageiro devem voar acima de 28mil pés");
      return null;
    }

    //Verifia se a aeronave é instância de aeronaveParticular
    //Verifica se altitude cumpre com os requisitos
    if ((aeronave instanceof AeronaveParticular && objplanodevoo.altitude > 27000)) {
      console.log("Plano Recusado, aeronaves do tipo Particular devem voar abaixo de 27mil pés");
      return null;
    }

    //Verifia se a aeronave é instância de aeronaveCarga
    //Verifica se o horário cumpre com os requisitos
    if ((aeronave instanceof aeronaveCarga && objplanodevoo.data.getHours() >= 6)) {
      console.log("Plano Recusado, aeronaves de Carga devem voar entre 0h e 6h apenas");
      return null;
    }

    //Verifica se a altitude está disponível
    //Distância aerovia foi declarada previamente
    const tempoDeVoo = distanciaAerovia / aeronave.velocidadeCruzeiro;
    //Contabiliza slots necessários e arredonda
    const slotsNecessarios = Math.ceil(tempoDeVoo); 

    //Pega método de ocupacaoAerovia para verificar disponbilidade de altitude com base no plano de voo
    if (!this.ocupacaoAerovia.isAltitudeLivre(objplanodevoo.idAerovia, objplanodevoo.altitude, objplanodevoo.data, slotsNecessarios)) {
      console.log("Altitude ou horário já ocupados.");
      return null;
    }


    //Utiliza método de servicoPlanos para adicionar plano de voo
    this.servicoPlanos.addPlano(objplanodevoo);

    //Utiliza método de ocupacaoAerovia para adicionar a lista ocupacoes
    this.ocupacaoAerovia.ocupa(objplanodevoo.idAerovia, objplanodevoo.data, objplanodevoo.altitude, slotsNecessarios);


    //Adiciona slot ocupado aos slots
    for (let i = 0; i < slotsNecessarios; i++) {
      const slot = objplanodevoo.data.getHours() + i;
      objplanodevoo.adicionarSlotOcupado(slot);
    }

    //Ativa o plano de voo mudando o status de cancelado!
    objplanodevoo.ativaPlano = true; 

    //Confirma que o plano de voo foi aprovado pelo ID
    console.log(`Plano de Voo aprovado com ID: ${objplanodevoo.id}`);
    return objplanodevoo.id;
  }


  //----------------- Funcionalidade 4: Listar um plano a partir do número -----------------
  

  listarPlano(planoID) {
    try {
      //Procura pelo plano de voo através do IF
      const plano = this.servicoPlanos.findPlano(planoID);
      console.log(`ID Plano de Voo: ${plano.id}`);
      console.log(`Piloto: ${plano.matriculaPiloto}`);
      console.log(`Aeronave: ${plano.idAerovia}`);
      console.log(`Data: ${plano.data.toLocaleDateString()}`);
      console.log(`Horário: ${plano.horario}h`);
      console.log(`Altitude: ${plano.altitude} pés`);
      console.log(`Slots de Horário: ${plano.slots}`);
      console.log(`Cancelado: ${plano.cancelado}`);
    } catch (error) {
      console.log(error.message);
    }
  }  
}       









