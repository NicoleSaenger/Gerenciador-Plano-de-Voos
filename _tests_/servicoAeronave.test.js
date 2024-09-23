// Importa a classe ServicoAeronaves e Aeronave

import { ServicoAeronaves } from '../classes/servicoAeronaves.js';
import { Aeronave } from '../classes/aeronave.js';


//-------------------- TESTE SERVIÇO AERONAVE --------------------


describe('ServicoAeronaves', () => {
  let servico;

  beforeEach(() => {
    // Inicializa uma nova instância de ServicoAeronaves antes de cada teste
    servico = new ServicoAeronaves();
  });

  it('deve adicionar uma aeronave corretamente', () => {
    const aeronave = new Aeronave('XYZ123', 600, 2500);
    servico.addAeronave(aeronave);
    
    // Verifica se a aeronave foi adicionada
    expect(servico.aeronaves).toContain(`Prefixo: ${aeronave.prefixo}\nVelocidade Cruzeiro: ${aeronave.velocidadeCruzeiro}\nAutonomia: ${aeronave.autonomia}\nTipo: undefined\n`);
  });

  it('deve verificar a presença de uma aeronave pelo prefixo', () => {
    const aeronave = new Aeronave('XYZ123', 600, 2500);
    servico.addAeronave(aeronave);

    // Verifica se a aeronave com o prefixo 'XYZ123' está na lista
    expect(servico.verificarAeronave('XYZ123')).toBe(true);
  });

  it('deve retornar null para uma aeronave que não está na lista', () => {
    const aeronave = new Aeronave('XYZ123', 600, 2500);
    servico.addAeronave(aeronave);

    // Verifica que a aeronave com prefixo 'ABC456' não está na lista
    expect(servico.obterAeronave('ABC456')).toBeNull();
  });

  it('deve retornar a aeronave correta com base no prefixo', () => {
    const aeronave = new Aeronave('XYZ123', 600, 2500);
    servico.addAeronave(aeronave);

    // Verifica que a aeronave com prefixo 'XYZ123' é retornada
    expect(servico.obterAeronave('XYZ123')).toEqual(aeronave);
  });
});
