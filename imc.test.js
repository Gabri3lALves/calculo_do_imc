const Imc = require('./imc')

const imc1 = new Imc()

it('Deve mostrar o calculo do imc', () => {
    expect(imc1.calcularimc(80,1.80)).toBe('Magreza')
})