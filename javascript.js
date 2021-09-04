const lista = require('./lista')

let rand = (min,max)=>{
  return Math.round(Math.random() * (max - min) + min)
}

let [maior,menor] = [0,0]

for(i=1;i<6;i++){

  let idade = rand(1,80)
  let nome = lista[rand(0,49)].nome

  let anos = idade<2?'ano':'anos'

  console.log(`${nome} tem ${idade} ${anos}.`)

  if(i==1){
    maior = idade
    menor = idade
  } else {
    if(idade > maior){
      maior = idade
    }
    if(idade < menor){
      menor = idade
    }
  }
}

console.log(`\n
A pessoa mais velha da turma tem ${maior} anos
enquanto a mais nova tem ${menor}.`)

