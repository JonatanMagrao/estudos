from random import randint

maior = 0
menor = 0

for p in range(1,6):
    i = randint(0,80)
    print('A pessoa numero {} tem {} anos'.format(p,i))
    if p == 1:
        maior = i
        menor = i
    else:
        if i > maior:
            maior = i
        if i < menor:
            menor = i

print('\nA pessoa mais velha tem {} anos.'.format(maior))
print('A pessoa mais nova tem {} anos'.format(menor))