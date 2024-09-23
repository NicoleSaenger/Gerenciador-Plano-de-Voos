// Importa a classe Aeronave

import { Aeronave } from '../classes/aeronave.js';


//-------------------- TESTE AERONAVE --------------------


describe('Aeronave', () => {
  it('Deve criar uma aeronave com propriedades válidas', () => {
    const aeronave = new Aeronave('ABC123', 500, 2000);
    
    expect(aeronave.prefixo).toBe('ABC123');
    expect(aeronave.velocidadeCruzeiro).toBe(500);
    expect(aeronave.autonomia).toBe(2000);
  });

  it('Deve lançar erro com propriedades inválidas', () => {
    expect(() => {
      new Aeronave(123, '500', '2000');
    }).toThrow();
  });
});
