// Importa a classe ServicoAerovias e Aerovia

import { ServicoAerovias } from '../classes/servicoAerovias.js';
import { Aerovia } from '../classes/aerovia.js';


//-------------------- TESTE SERVIÇO AEROVIAS --------------------


describe('ServicoAerovias', () => {
  let servicoAerovias;

  beforeEach(() => {
    // Cria uma nova instância do Serviço de Aerovias antes de cada teste
    servicoAerovias = new ServicoAerovias();
  });

  it('deve adicionar uma nova aerovia corretamente', () => {
    const aerovia = new Aerovia('A123', 'Sao Paulo', 'Rio de Janeiro', 500);
    servicoAerovias.addAerovia(aerovia);

    // Verifica se a aerovia foi adicionada
    expect(servicoAerovias.aerovias).toContain('ID: A123\nOrigem: Sao Paulo\nDestino: Rio de Janeiro\nTamanho: 500\n');
  });

  it('deve lançar um erro ao adicionar um objeto que não é uma Aerovia', () => {
    // Tentativa de adicionar um objeto que não é uma Aerovia
    expect(() => {
      servicoAerovias.addAerovia({});
    }).toThrow('Este objeto não é uma aerovia...');
  });

  it('deve verificar se uma aerovia existe pelo ID', () => {
    const aerovia = new Aerovia('A124', 'Sao Paulo', 'Rio de Janeiro', 600);
    servicoAerovias.addAerovia(aerovia);

    // Verifica se a aerovia existe
    expect(servicoAerovias.existeAerovia('A124')).toBe(true);
    expect(servicoAerovias.existeAerovia('A999')).toBe(false);
  });

  it('deve resgatar uma aerovia pelo ID', () => {
    const aerovia = new Aerovia('A125', 'Sao Paulo', 'Rio de Janeiro', 700);
    servicoAerovias.addAerovia(aerovia);

    // Verifica se a aerovia pode ser resgatada pelo ID
    const resultado = servicoAerovias.getAeroviaById('A125');
    expect(resultado).toBe(aerovia);
  });
});
