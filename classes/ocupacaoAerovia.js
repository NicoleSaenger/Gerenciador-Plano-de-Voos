//Importa biblioteca bycontract
import { validate, typedef } from "bycontract";


//----------------------------------- Classe OcupacaoAerovia -----------------------------------


export class OcupacaoAerovia {
    #aerovias;

    constructor() {
        //Inicia um map 
        this.#aerovias = new Map();
        }

        //Adiciona aerovias!
        addAerovias(aerovias) {
            //Itera sobre a array aerovias e adiciona ao map o próprio objeto de aerovia e um array ocupacao que irá conter informações sobre a ocuapação
            aerovias.forEach((aerovia) => {
                this.#aerovias.set(aerovia.id, {
                    aerovia: aerovia,
                    ocupacao: [],
                });
            });
        }



        //Com base no plano de voo, ocupa aerovia, sem realizar verifcações prévias visto que o plano já foi aprovado
        ocupando(plano) {
            //Plano de voo
            const { idAerovia, data, altitude, slots } = plano;
            //Procura aerovia pelo id no map
            const aeroviaOcupada = this.#aerovias.get(idAerovia);
            if (!aeroviaOcupada) throw new Error("Aerovia não encontrada");

            //Cria um objeto ocupacao com os dados
            const ocupacao = {
                data,
                altitude,
                slots,
            };
        //Adiciona o objeto a array ocupacao
        aeroviaOcupada.ocupacao.push(ocupacao);
        }



        //Verifica se a aerovia está ocupada
        isOcupado(idAerovia, data, altitude, slot) {
            //Verifica no map #aerovias se existe através do ID
            const aeroviaOcupada = this.#aerovias.get(idAerovia);
            if (!aeroviaOcupada) throw new Error("Aerovia não encontrada");

            //Através do método some, verifica nas ocupações se a aerovia está livre de acordo com as especificidades dadas
            return aeroviaOcupada.ocupacao.some((oc) => {
            return (
                //Compara os dados fornecidos com os dados das ocupações
                oc.data.getTime() === data.getTime() &&
                oc.altitude === altitude &&
                oc.slots.includes(slot)
            );
            //Método irá retornar true se houver uma ocupação para aquela aerovia com a mesma data etc
            //Método irá retornar false se a aerovia não estiver ocupada!! 
            });
        }



        //Verifica quais altitudes estão livres
        altitudesLivres(idAerovia, data) {
            //Recupera aerovia do map #aerovias através do ID
            const aeroviaOcupada = this.#aerovias.get(idAerovia);
            if (!aeroviaOcupada) throw new Error("Aerovia não encontrada");

            //Filtra apenas as ocupações com mesma data e altitude
            const ocupadas = aeroviaOcupada.ocupacao
                .filter((oc) => oc.data.getTime() === data.getTime())
                .map((oc) => oc.altitude);

            //Lista com todas altitudes existentes
            const todasAltitudes = [
                25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000,
                35000,
            ];

            //Compara todas altitudes existentes com as ocupadas e retorna novo array com as livres
            return todasAltitudes.filter((altitude) => !ocupadas.includes(altitude));
        }


        
        //Ocupa aerovia com base nas informações individuais
        ocupa(idAerovia, data, altitude, slot) {
            //Recupera aerovia do map #aerovias através do ID
            const aeroviaOcupada = this.#aerovias.get(idAerovia);
            if (!aeroviaOcupada) throw new Error("Aerovia não encontrada");
            //Através da função isOcupado, verifica se stá livre ou não! 
            if (this.isOcupado(idAerovia, data, altitude, slot)) {
                return false;
            }
                //Chama o método ocupando e adiicona objeto a ocupacoes
                this.ocupando({
                    idAerovia,
                    data,
                    altitude,
                    slots: [slot],
                });

        return true;
    }


        //Verifica a ocupação atual de todas aerovias do map
        getOcupacao() {
            //Cria objeto
            const ocupacao = {};
            //Itera sobre as entradas do map (key é o IDaerovia)
            for (const [idAerovia, aeroviaData] of this.#aerovias.entries()) {
                ocupacao[idAerovia] = aeroviaData.ocupacao;
            }
            //Retorna objeto com cada id de aerovia e suas ocupações
            return ocupacao;

        }
    
    

        //Verifica se altitude específica está disponível para slots necessários
        isAltitudeLivre(idAerovia, altitude, data, slotsNecessarios) {

            //Recupera aerovia do map #aerovias através do ID
            const aeroviaOcupada = this.#aerovias.get(idAerovia);
            if (!aeroviaOcupada) throw new Error("Aerovia não encontrada");
        
            // Verifica se a altitude está livre para todos os slots necessários
            for (let i = 0; i < slotsNecessarios; i++) {
            if (this.isOcupado(idAerovia, data, altitude, i + 1)) {
                return false; // Altitude ocupada para pelo menos um dos slots necessários
            }
            }
            return true; // Altitude está livre para todos os slots necessários
        }
    }