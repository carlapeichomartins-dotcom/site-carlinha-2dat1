import readline from 'readline'

const tela = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('===========================')
console.log('== BEM VINDO AO CHAT DO HENRIQUE E JULIANO==')
console.log('===========================')

tela.question('Qual é o seu nome? ', (nome) => {

console.log(`Olá ${nome}! ! Somos os melhores cantores do mundo!`)

tela.question('Primeiramente, você é muito fã de nós? (sim ou não) ', (resposta) => {

const respostaLimpa = resposta.toLowerCase().trim()

if (respostaLimpa === 'sim') {

console.log('Ah, ficamos felizes em saber disso!')
console.log('Fim.')

tela.close()

} else {

tela.question('Quantos anos você tem, exatamente? ', (idade) => {

console.log('Haha, somos mais velhos!')

tela.question('Você prefere música de amor ou sofrência? ', (respostaamor) => {

const respostaAmor = respostaamor.toLowerCase().trim()

if (respostaAmor === 'amor') {
console.log('Você é um dos meus!')
} else if (respostaAmor === 'sofrência') {
console.log('Ugh... prefiro amor!')
}

console.log('Enfim, gosto muito de fazer perguntas!')

tela.question('Hm... quer saber um segredo sobre nós? (sim ou não) ', (segredo) => {

const respostaSegredo = segredo.toLowerCase().trim()

if (respostaSegredo === 'sim') {
console.log('Nós somos os melhores cantores do mundo!')
} else {
console.log('Ok...')
 }

console.log('Ahh! Você é muito legal...')

tela.question('Você gosta de música? (sim ou não) ', (música) => {

const respostaMúsica = música.toLowerCase().trim()

if (respostaMúsica === 'sim') {
  console.log('Haha!! também adoro música!!')
 } else {
console.log('Oh, sério? que pena :(')
 }

console.log('Foi muito bom conversar contigo, mas agora temos que ir! Adeus.')
console.log('Fim.')

tela.close()
})
}) 
})
})
}
})
})