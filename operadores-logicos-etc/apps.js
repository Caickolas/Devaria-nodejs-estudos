const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se voce é maior de 18 anos e tem habilitação para  saber se voce pode entrar no kart');
console.log('Além das suas verificações, precisamos verificar se você está na lista de presença do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2004) {
        console.log('Você não tem 18 anos');
    } else {
        readLine.question('Você tem habilitação? (Sim/Não)', temHabilitação => {
            if (!(temHabilitação.toUpperCase() === "SIM")) {
                console.log('Voce não tem habilitação para entrar no kart')
            } else {
                readLine.question('Qual seu nome?', nome => {
                    switch (nome) {
                        case 'Douglas':
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Rafael':
                            console.log('Bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença')
                    }
                })
            }
        })
    }
})