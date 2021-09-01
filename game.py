from random import randint
from time import sleep

#variáveis
itens = ['Pedra','Papel','Tesoura']
linha = '=='*10
cpu =  randint(1,3)

#a escolha de jogada
print(f'\n{linha}')
print('[ 1 ] Pedra\n[ 2 ] Papel\n[ 3 ] Tesoura')
print(f'{linha}')

jogador = int(input('Escolha sua jogada: '))

#ero ao escolher um número fora dos permitidos
if jogador != 1 and jogador != 2 and jogador!= 3:
    print('{:x^30}'.format('Opção inválida. Tente novamente!'))

#segue para a jogatina com a regra do jogo
else: 
    jogada = 'Cpu jogou {} e você jogou {}'.format(itens[cpu-1],itens[jogador-1])

    # jo-ken-po delay time to show
    print('\n{:#^23}'.format('   JO   '))
    sleep(1)
    print('{:#^23}'.format('   KEN  '))
    sleep(1)
    print('{:#^23}'.format('   PO   '))
    sleep(1)

    if (jogador == cpu + 1) or (jogador == 1 and cpu == 3) :
        print(f'\n{jogada}')
        print('{:*^40}\n'.format('  Parabéns, você ganhou!  '))
    elif jogador == cpu:
        print(f'\n{jogada}')
        print('{:=^40}\n'.format('  Empate!  '))
    else:
        print(f'\n{jogada}')
        print('{:-^40}\n'.format('  Você perdeu!  '))
