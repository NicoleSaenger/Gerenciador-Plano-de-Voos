// Importa a classe Piloto e o serviço de pilotos

import { Piloto } from '../classes/piloto.js';
import { ServicoPiloto } from '../classes/servicoPilotos.js';

//-------------------- TESTE PILOTO --------------------


describe('Piloto', () => {
    let piloto;

    beforeEach(() => {
        piloto = new Piloto();
    });

    it('deve criar um piloto com habilitação ativa e verificar suas propriedades', () => {
        piloto.addPilot({
            matricula: 'P123',
            nome: 'João Silva',
            habilitacaoAtiva: true,
        });

        // Verifica as propriedades do piloto
        expect(piloto.matricula).toBe('P123');
        expect(piloto.nome).toBe('João Silva');
        expect(piloto.habilitacaoAtiva).toBe(true);
        expect(piloto.toString()).toBe(
            'Matrícula: P123\nNome: João Silva\nHabilitação Ativa: true'
        );
    });

    it('deve criar um piloto com habilitação inativa e verificar suas propriedades', () => {
        piloto.addPilot({
            matricula: 'P124',
            nome: 'Maria Oliveira',
            habilitacaoAtiva: false,
        });

        // Verifica as propriedades do piloto
        expect(piloto.matricula).toBe('P124');
        expect(piloto.nome).toBe('Maria Oliveira');
        expect(piloto.habilitacaoAtiva).toBe(false);
        expect(piloto.toString()).toBe(
            'Matrícula: P124\nNome: Maria Oliveira\nHabilitação Ativa: false'
        );
    });
});