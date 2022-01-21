//1 - Crie uma função que exiba uma mensagem no console.

function mensagem(texto){
    console.log(`${texto}`)
}

mensagem("Estou exibindo uma mensagem no console")

//2 - Crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mostrarNome(nome){
    console.log(`${nome}`)
}
mostrarNome("Letícia")

//3 - Crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function dados(nome, number, estiloMusical){
    console.log(`Seu nome é: ${nome}, o número que você escolheu foi: ${number} e seu estilo musical favorito é: ${estiloMusical}`)
}
dados("Letícia",10,"jazz")

//4 - Crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function estilo(filme, musica){
    console.log(`Você escolheu o filme: ${filme} e a música: ${musica} `)
}
estilo("Como eu era antes de você", "Ela não - Ludmilla (Numanice)")

//5 - Crie uma função que retorne o triplo do número recebido no (parâmetro)

function triplo(num) { 
    return num*3
}

console.log (triplo (3))