/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
*/
console.clear()

const iniciarRodada = confirm("Quer iniciar uma nova rodada?")

if(iniciarRodada){
   console.log("Bem-vindo ao jogo de blackjack!")

   // 1) sortear as cartas para jogador e computador (2 para cada)
   // 2) comparar valores
   // 3) console log de vencedor ou empate

   const cartaJogador1 = comprarCarta()
   const cartaJogador2 = comprarCarta()

   const totalJogador = cartaJogador1.valor + cartaJogador2.valor

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   const totalComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Jogador: cartas ${cartaJogador1.texto} ${cartaJogador2.texto} - pontuação ${totalJogador}`)
   console.log(`Computador: cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${totalComputador}`)
   
   if(totalJogador > totalComputador){
      console.log("Jogador venceu!")
   } else if (totalComputador > totalJogador){
      console.log("Computador venceu!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("Jogo acabou.")
}