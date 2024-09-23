// Importa a classe OcupacaoAerovia e Aerovia

import { OcupacaoAerovia } from '../classes/ocupacaoAerovia.js';
import { Aerovia } from '../classes/aerovia.js';


//-------------------- TESTE OCUPACAO AEROVIA --------------------


describe('OcupacaoAerovia', () => {
  let ocupacaoAerovia;
  let aerovia1, aerovia2;

  beforeEach(() => {
    // Cria novas instâncias da OcupacaoAerovia e Aerovia antes de cada teste
    ocupacaoAerovia = new OcupacaoAerovia();
    aerovia1 = new Aerovia('A123', 'Sao Paulo', 'Rio de Janeiro', 500);
    aerovia2 = new Aerovia('A124', 'Sao Paulo', 'Belo Horizonte', 600);

    // Adiciona as aerovias ao sistema
    ocupacaoAerovia.addAerovias([aerovia1, aerovia2]);
  });

  it('deve adicionar aerovias corretamente', () => {
    // Verifica se as aerovias foram adicionadas
    expect(ocupacaoAerovia.getOcupacao()).toEqual({
      'A123': [],
      'A124': []
    });
  });

  it('deve ocupar uma aerovia corretamente', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slot = 1;

    // Ocupa a aerovia
    expect(ocupacaoAerovia.ocupa('A123', data, altitude, slot)).toBe(true);

    // Verifica se a aerovia está ocupada
    expect(ocupacaoAerovia.isOcupado('A123', data, altitude, slot)).toBe(true);
  });

  it('deve verificar se a aerovia está ocupada', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slot = 1;

    ocupacaoAerovia.ocupa('A123', data, altitude, slot);

    // Verifica se a aerovia está ocupada
    expect(ocupacaoAerovia.isOcupado('A123', data, altitude, slot)).toBe(true);
    expect(ocupacaoAerovia.isOcupado('A123', data, altitude, 2)).toBe(false);
  });

  it('deve verificar as altitudes livres', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slot = 1;

    ocupacaoAerovia.ocupa('A123', data, altitude, slot);

    // Verifica quais altitudes estão livres
    const altitudesLivres = ocupacaoAerovia.altitudesLivres('A123', data);
    expect(altitudesLivres).not.toContain(altitude);
    expect(altitudesLivres).toEqual(expect.arrayContaining([25000, 26000, 27000, 28000, 30000, 31000, 32000, 33000, 34000, 35000]));
  });

  it('deve verificar se altitude específica está livre para slots necessários', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slotsNecessarios = 2;

    // Adiciona uma aerovia
    ocupacaoAerovia.addAerovias([{ id: 'A123', /* outras propriedades */ }]);

    // Ocupa o primeiro slot
    ocupacaoAerovia.ocupa('A123', data, altitude, 1);

    // Verifica se a altitude está livre para todos os slots necessários
    expect(ocupacaoAerovia.isAltitudeLivre('A123', altitude, data, slotsNecessarios)).toBe(false);
});

  it('deve retornar erro ao tentar ocupar aerovia inexistente', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slot = 1;

    // Tenta ocupar uma aerovia que não existe
    expect(() => {
      ocupacaoAerovia.ocupa('A999', data, altitude, slot);
    }).toThrow('Aerovia não encontrada');
  });

  it('deve retornar erro ao tentar verificar ocupação de aerovia inexistente', () => {
    const data = new Date('2024-09-08T12:00:00Z');
    const altitude = 29000;
    const slot = 1;

    // Tenta verificar ocupação de uma aerovia que não existe
    expect(() => {
      ocupacaoAerovia.isOcupado('A999', data, altitude, slot);
    }).toThrow('Aerovia não encontrada');
  });

  it('deve retornar erro ao tentar verificar altitudes livres de aerovia inexistente', () => {
    const data = new Date('2024-09-08T12:00:00Z');

    // Tenta verificar altitudes livres de uma aerovia que não existe
    expect(() => {
      ocupacaoAerovia.altitudesLivres('A999', data);
    }).toThrow('Aerovia não encontrada');
  });
});
