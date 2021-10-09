# lista = ['uova','zucchero','tequila','pane','dentifricio','assenzio','limone','amaretto','pesca']

# blacklist = ['assenzio','amaretto','tequila']

# #print(len(lista))

# def stringaLista(indice):
#     return str(indice) + ' ' + lista[indice]


# for i in range(0,len(lista)):
#     if lista[i] in blacklist:
#         print('censura')
#     else:
#         print(stringaLista(i))


# print('...................BENVENUTI NELLA CALCOLATRICE...........................')

# numero1 = int(input('Inserisci un numero: '))
# numero2 = int(input('Inserisci un secondo numero: '))

# print(f'La somma dei due numeri vale: {numero1 + numero2}')

import math

print('...................BENVENUTI NELLA CALCOLATRICE DI TETTE...........................')

angolo = int(input('Inserisci l\'angolo: '))
angolo = math.radians(angolo)
scelta = int(input('Inserisci \n1. cos(), \n2. sin()\n'))

if(scelta == 1):
    print(math.cos(angolo))
elif(scelta == 2):
    print(math.sin(angolo))
else:
    print('va che hai cannato numero')









