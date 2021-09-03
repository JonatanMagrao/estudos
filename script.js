/*
Practicing and memorizing the arguments in node
The example below shows a way to calculate the nums throught command line
The most important thing here is the process.argv
It will show an array in command line, slice is to not show/eliminate these 2 first information and then,
considerate the follow arguments written in command line by the user
*/

const args = process.argv.slice(2)

const c = args[0].toUpperCase()
const a = Number(args[1])
const b = Number(args[2])


const mate = {
    somar(a,b){
        console.log(a + b)
    },
    multiplicar(a,b){
        console.log(a*b)
    },
    dividir(a,b){
        console.log(a/b)
    },
    subtrair(a,b){
        console.log(a-b)
    }
}

switch(c){
    case 'SOM': mate.somar(a,b); break;
    case 'MUL': mate.multiplicar(a,b); break;
    case 'DIV': mate.dividir(a,b); break;
    case 'SUB': mate.subtrair(a,b); break;
    default: console.log('Esta opção não existe! Tente novamente!')

}
