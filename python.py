nome = 'Jonatan Nogueira da Silva'
print('''
    nome: {}
    maiusculas: {}
    minusculas: {}
    total de letras: {}
    o numero de letras do seu primeiro nome e {}
    '''.format(
    nome,
    nome.upper(),
    nome.lower(),
    len(nome) - nome.count(' '),
    # len(nome.replace(' ',''))
    # len(nome.split(' ')[0]))
    nome.find(' '))
    )
