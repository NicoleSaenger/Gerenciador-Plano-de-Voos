// Importa bibliotecas necessárias
import { Sistema } from '../classes/sistema.js';
import { ServicoAerovias } from '../classes/servicoAerovias.js';
import { OcupacaoAerovia } from '../classes/ocupacaoAerovia.js';
import { ServicoPlanos } from '../classes/servicoPlanos.js';
import { ServicoAeronaves } from '../classes/servicoAeronaves.js';
import { ServicoPilotos } from '../classes/servicoPilotos.js';
import { Aerovia } from '../classes/aerovia.js';
import { PlanoDeVoo } from '../classes/planoDeVoo.js';
import { AeronavePassageiros } from '../classes/aeronavePassageiros.js';
import { AeronaveParticular } from '../classes/aeronaveParticular.js';
import { AeronaveCarga } from '../classes/aeronaveCarga.js';


//-------------------- TESTE SISTEMA --------------------

// Cria o mock para o ServicoAerovias
const mockServicoAerovias = new ServicoAerovias();
const aerovia1 = new Aerovia('1', 'Aeroporto A', 'Aeroporto B', 1000);
const aerovia2 = new Aerovia('2', 'Aeroporto C', 'Aeroporto D', 2000);

// Adiciona as aerovias ao mock
mockServicoAerovias.addAerovia(aerovia1);
mockServicoAerovias.addAerovia(aerovia2);

// Cria mocks para as outras dependências
const mockServicoPilotos = {};
const mockServicoAeronaves = {};
const mockServicoPlanos = {};
const mockOcupacaoAerovia = {};

// Cria uma instância da classe Sistema
const sistema = new Sistema(
  mockServicoAerovias,
  mockServicoPilotos,
  mockServicoAeronaves,
  mockServicoPlanos,
  mockOcupacaoAerovia
);

// Descreve o grupo de testes
describe('Sistema', () => {
  // Testa o método listarAerovias
  test('listarAerovias deve retornar todas as aerovias', () => {
    // Espia o console.log para capturar a saída
    console.log = jest.fn();

    // Chama o método listarAerovias
    sistema.listarAerovias();

    // Verifica se o console.log foi chamado com as saídas esperadas
    expect(console.log).toHaveBeenCalledWith("Lista de Aerovias:");
    expect(console.log).toHaveBeenCalledWith(aerovia1.toString());
    expect(console.log).toHaveBeenCalledWith(aerovia2.toString());
  });
});