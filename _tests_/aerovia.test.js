// Importa a classe Aerovia

import { Aerovia } from '../classes/aerovia.js';


//-------------------- TESTE AEROVIA --------------------


describe('Aerovia', () => {
  it('deve criar uma instância e retornar propriedades corretamente', () => {
    const aerovia = new Aerovia('A123', 'Sao Paulo', 'Rio de Janeiro', 500);

    expect(aerovia.id).toBe('A123');
    expect(aerovia.origem).toBe('Sao Paulo');
    expect(aerovia.destino).toBe('Rio de Janeiro');
    expect(aerovia.tamanho).toBe(500);
  });

  it('deve formatar a saída corretamente com toString', () => {
    const aerovia = new Aerovia('A123', 'Sao Paulo', 'Rio de Janeiro', 500);
    const expectedOutput = 'ID: A123\nOrigem: Sao Paulo\nDestino: Rio de Janeiro\nTamanho: 500\n';
    
    expect(aerovia.toString()).toBe(expectedOutput);
  });

  it('deve lançar erro se os parâmetros não forem válidos', () => {

    // Erro de valor: tamanho deve ser um número positivo
    expect(() => {
      new Aerovia('A125', 'Sao Paulo', 'Rio de Janeiro', -500); // Erro de valor
    }).toThrow('O tamanho deve ser um número positivo.');
  });
});
