//Para demonstrar as funcionalidades das classes desenvolvidas e os seus respectivos métodos, construi este código com funções específicas que testam cada classe. Além disso, criei a função executarTestes() que contém todas as função específicas de cada classe. Ao rodar este arquivo, irá chamar esta função principal que irá execuatar o código e demonstrar as validações. 


//Importa classes
import { Aeronave } from "./aeronave.js";
import { AeronaveCarga } from "./aeronaveCarga.js";
import { AeronaveComercial } from "./aeronaveComercial.js";
import { AeronaveParticular } from "./aeronaveParticular.js";
import { AeronavePassageiros } from "./aeronavePassageiros.js";
import { Aerovia } from "./aerovia.js";
import { Piloto } from "./piloto.js";
import { ServicoAeronaves } from "./servicoAeronaves.js";
import { ServicoAerovias } from "./servicoAerovias.js";
import { ServicoPilotos } from "./servicoPilotos.js";




//----------------------------------------------------------------------------------------------------------------

// Função principal para executar todos os testes
function executarTestes() {
    testarServicoPilotos();
    console.log("\n---------------------------------------------------------------------------------------\n");
    testarServicoAeronaves();
    console.log("\n---------------------------------------------------------------------------------------\n");
    testarServicoAerovias();
}

//----------------------------------------------------------------------------------------------------------------


// Testes para ServicoPilotos

function testarServicoPilotos() {
    console.log("\n----- Testando ServicoPilotos -----");

    let servicoPilotos = new ServicoPilotos(); //Cria a classe


    // Teste 1: Adicionando pilotos válidos
    console.log("\nTeste 1: Adicionando pilotos válidos...\n");

    try {
        let piloto1 = new Piloto('PIL-001', 'Nicole Saenger', true);
        let piloto2 = new Piloto('PIL-002', 'Victor Becker', true);

        //Adiciona pilotos a array #pilotos
        servicoPilotos.adicionaPiloto(piloto1);
        servicoPilotos.adicionaPiloto(piloto2);

        console.log("Pilotos adicionados com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar pilotos válidos:", error.message);
    }

    console.log("\n--------------");


    // Teste 2: Tentando adicionar um piloto inválido por um objeto
    console.log("\nTeste 2: Tentando adicionar um piloto inválido por um objeto...\n");

    try {
        let pilotoInvalido = { matricula: 'PIL-003', nome: 'Julia Lima', habilitacaoAtiva: true }; // Objeto não é uma instância de Piloto
        servicoPilotos.adicionaPiloto(pilotoInvalido);
    } catch (error) {
        console.error("Erro esperado ao adicionar piloto inválido:", error.message);
    }

    console.log("\n--------------");


    // Teste 3: Recuperando piloto por matrícula existente
    console.log("\nTeste 3: Recuperando piloto por matrícula existente...\n");

    try {
        let pilotoRecuperado = servicoPilotos.recupera('PIL-001');
        if (pilotoRecuperado) {
            console.log("Piloto recuperado com sucesso:\n", pilotoRecuperado.toString());
        }
    } catch (error) {
        console.error("Erro ao recuperar piloto existente:", error.message);
    }

    console.log("\n--------------");


    // Teste 4: Tentando recuperar piloto por matrícula inexistente
    console.log("\nTeste 4: Tentando recuperar piloto por matrícula inexistente...\n");
    try {
        let pilotoInexistente = servicoPilotos.recupera('PIL-999');
        if (!pilotoInexistente) {
            console.log("Nenhum piloto encontrado com a matrícula fornecida.");
        }
    } catch (error) {
        console.error("Erro esperado ao recuperar piloto inexistente:", error.message);
    }

    console.log("\n--------------");


    // Teste 5: Obtendo todos os pilotos cadastrados
    console.log("\nTeste 5: Obtendo todos os pilotos cadastrados através da array...\n");
    try {
        let todosPilotos = servicoPilotos.todos(); //Chama a array #pilotos
        console.log("Lista de todos os pilotos cadastrados:");
        todosPilotos.forEach((piloto, index) => {
            console.log(`\nPiloto ${index + 1}:\n${piloto.toString()}`); //index + 1 imprime o número da posição do piloto na lista, começando por 1
        });
    } catch (error) {
        console.error("Erro ao obter todos os pilotos:", error.message);
    }
}


//----------------------------------------------------------------------------------------------------------------

// Testes para ServicoAeronaves

function testarServicoAeronaves() {
    console.log("\n--- Testando ServicoAeronaves ---");

    let servicoAeronaves = new ServicoAeronaves();

    // Teste 1: Adicionando aeronaves válidas
    console.log("\nTeste 1: Adicionando aeronaves válidas...\n");

    try {
        let aeronaveParticular = new AeronaveParticular('PT-ABC', 500, 2000, 'Particular', 'João Victor Silva');
        let aeronavePassageiros = new AeronavePassageiros('PR-DEF', 800, 5000, 'Comercial_passageiros', 'Gol', 180);
        let aeronaveCarga = new AeronaveCarga('PP-GHI', 700, 4000, 'Comercial_carga', 'FedEx', 10000);

        servicoAeronaves.adicionaAeronave(aeronaveParticular);
        servicoAeronaves.adicionaAeronave(aeronavePassageiros);
        servicoAeronaves.adicionaAeronave(aeronaveCarga);

        console.log("Aeronaves adicionadas com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar aeronaves válidas:", error.message);
    }

    console.log("\n--------------");


    // Teste 2: Tentando adicionar uma aeronave inválida
    console.log("\nTeste 2: Tentando adicionar uma aeronave inválida...\n");

    try {
        let aeronaveInvalida = new AeronavePassageiros('PS-NAN', 830, 5000, 'Comercial_apenas', 'Latam', 30);
        servicoAeronaves.adicionaAeronave(aeronaveInvalida);
    } catch (error) {
        console.error("Erro esperado ao adicionar aeronave inválida:", error.message);
    }

    console.log("\n--------------");


    // Teste 3: Recuperando todas as aeronaves
    console.log("\nTeste 3: Recuperando todas as aeronaves...\n");

    try {
        let todasAeronaves = servicoAeronaves.recuperaAeronaves();
        console.log("Lista de todas as aeronaves cadastradas:");
        todasAeronaves.forEach((aeronave, index) => { //Percorre cada uma das aeronaves da array #todas
            console.log(`\nAeronave ${index + 1}:\n${aeronave.toString()}`); //Chama o toString para imprimir as atribuições
        });
    } catch (error) {
        console.error("Erro ao recuperar todas as aeronaves:", error.message);
    }

    console.log("\n--------------");


    // Teste 4: Buscando aeronave por prefixo existente
    console.log("\nTeste 4: Buscando aeronave por prefixo existente...\n");

    try {
        let aeronaveEncontrada = servicoAeronaves.buscaPorPrefixo('PR-DEF');
        if (aeronaveEncontrada) {
            console.log("Aeronave encontrada por prefixo:", aeronaveEncontrada.toString());
        } else {
            console.log("Nenhuma aeronave encontrada com o prefixo fornecido.");
        }
    } catch (error) {
        console.error("Erro ao buscar aeronave por prefixo:", error.message);
    }

    console.log("\n--------------");


    // Teste 5: Buscando aeronave por prefixo inexistente
    console.log("\nTeste 5: Buscando aeronave por prefixo inexistente...\n");
    try {
        let aeronaveNaoEncontrada = servicoAeronaves.buscaPorPrefixo('XX-XYZ');
        if (!aeronaveNaoEncontrada) {
            console.log("Nenhuma aeronave encontrada com o prefixo fornecido.");
        }
    } catch (error) {
        console.error("Erro esperado ao buscar aeronave com prefixo inexistente:", error.message);
    }

    console.log("\n--------------");


    // Teste 6: Recuperando aeronaves por tipo
    console.log("\nTeste 6: Recuperando aeronaves por tipo...\n");
    try {
        let aeronavesPassageiros = servicoAeronaves.recuperaPorTipo('Comercial_passageiros');
        console.log("Aeronaves do tipo Comercial_passageiros:");
        aeronavesPassageiros.forEach((aeronave, index) => { //Pecorre a 
            console.log(`\nAeronave ${index + 1}:\n${aeronave.toString()}`);
        });
    } catch (error) {
        console.error("Erro ao recuperar aeronaves por tipo:", error.message);
    }
}


//----------------------------------------------------------------------------------------------------------------

// Testes para ServicoAerovias

function testarServicoAerovias() {
    console.log("\n--- Testando ServicoAerovias ---");

    let servicoAerovias = new ServicoAerovias();

    // Teste 1: Adicionando aerovias válidas
    console.log("\nTeste 1: Adicionando aerovias válidas...\n");

    try {
        let aerovia1 = new Aerovia('AR-001', 'Porto Alegre', 'Florianópolis', 375);
        let aerovia2 = new Aerovia('AR-002', 'São Paulo', 'Porto Alegre', 500);

        servicoAerovias.adicionaAerovia(aerovia1);
        servicoAerovias.adicionaAerovia(aerovia2);

        console.log("Aerovias adicionadas com sucesso.");
    } catch (error) {
        console.error("Erro ao adicionar aerovias válidas:", error.message);
    }

    console.log("\n--------------");


    // Teste 2: Tentando adicionar uma aerovia inválida
    console.log("\nTeste 2: Tentando adicionar uma aerovia inválida...\n");
    try {
        let aeroviaInvalida = { id: 'AR-003', origem: 'Curitiba', destino: 'Porto Alegre', tamanho: 300 }; // Objeto não é instância de Aerovia
        servicoAerovias.adicionaAerovia(aeroviaInvalida);
    } catch (error) {
        console.error("Erro esperado ao adicionar aerovia inválida.");
    }

    console.log("\n--------------");


    // Teste 3: Recuperando aerovias por origem e destino existentes
    console.log("\nTeste 3: Recuperando aerovias por origem e destino existentes...\n");

    try {
        let aeroviasEncontradas = servicoAerovias.recupera('São Paulo', 'Porto Alegre');
        if (aeroviasEncontradas.length > 0) {
            console.log(`Aerovias encontradas de São Paulo para Porto Alegre:`);
            aeroviasEncontradas.forEach((aerovia, index) => { //Percorre a lista e traz as infrmações das aerovias
                console.log(`\nAerovia ${index + 1}:\n${aerovia.toString()}`);
            });
        } else {
            console.log("Nenhuma aerovia encontrada com a origem e destino fornecidos.");
        }
    } catch (error) {
        console.error("Erro ao recuperar aerovias por origem e destino:", error.message);
    }

    console.log("\n--------------");


    // Teste 4: Tentando recuperar aerovias por origem e destino inexistentes
    console.log("\nTeste 4: Tentando recuperar aerovias por origem e destino inexistentes...\n");

    try {
        let aeroviasNaoEncontradas = servicoAerovias.recupera('Manaus', 'Fortaleza');
        if (aeroviasNaoEncontradas.length === 0) {
            console.log("Nenhuma aerovia encontrada com a origem e destino fornecidos.");
        }
    } catch (error) {
        console.error("Erro esperado ao recuperar aerovias inexistentes:", error.message);
    }
}


//----------------------------------------------------------------------------------------------------------------

// Chamando a função e executando todos os testes
executarTestes();
