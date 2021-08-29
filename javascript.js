const nome = 'Jonatan Nogueira da Silva'
const reg = new RegExp(' ','g')
console.log(`
  nome: ${nome}
  maiusculas: ${nome.toUpperCase()}
  minusculas: ${nome.toLowerCase()}
  total de letras: ${nome.replace(reg,'').length}
  o numero de letras no seu primeiro nome e: ${nome.split(' ')[0].length}  
`)