const listaDeArgumentos = process.argv.slice(2);

console.log('--------------------Executando um FOR ------------------------------')
for (let controladorFor = 0; controladorFor < listaDeArgumentos.length; controladorFor++) {
    console.log(`Posicao ${controladorFor} valor lido = ${listaDeArgumentos[controladorFor]}`)
}

console.log('--------------------Executando um WHILE ------------------------------')
let controladorWhile = 0;
while (controladorWhile < listaDeArgumentos.length) {
    console.log(`posicao ${controladorWhile} valor lido = ${listaDeArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('--------------------Executando um DO WHILE ------------------------------')
let controladorDoWhile = 0;
do {
    console.log(`posicao ${controladorDoWhile} valor lido = ${listaDeArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (controladorDoWhile < listaDeArgumentos.length);

console.log('--------------------Executando um FOR OF ------------------------------')
let controladorForOf = 0;
for (const argumento of listaDeArgumentos) {
    console.log(`posição ${controladorForOf}valor lido = ${argumento}`);
    controladorForOf++
}