#########################################################################################################
##### Date: 2024                                                                                    #####
##### Stream: Python Based Automation                                                               #####
##### Author: sbala                                                                                 #####
##### Subject: Podstawy pythona - iteratory, biblioteka itertools                                   #####
#########################################################################################################

import itertools
import random

#########################################################################################################
#####   ITERATORY W JĘZYKU PYTHON -- YIELD                                                          #####
#########################################################################################################

#########################################################################################################
#####   Różnica między YIELD i RETURN, generator                                                    #####
#########################################################################################################
'''
def uzyjYieldJakReturn():
  yield "Czy yield zachowa się podobnie do return?"

output = uzyjYieldJakReturn()
print(output)

for i in output:
    print(i)

'''
'''
def generator():
    yield "R"
    yield "O"
    yield "W"
    yield "E"
    yield "R"

test = generator()
print(next(test),end="")
print(next(test),end="")

test = generator()
print(next(test),end="")
for i in test:
    print(i,end="")

test = generator()
print(next(test),end="")
'''



#########################################################################################################
#####   Wyciągnij kolejną liczbę z losowej pozycji listy bez zwracania                              #####
#########################################################################################################
'''
def podajKolejnyElementLosowyZListy(lista):
    while len(lista) > 0:
        member =  random.randrange(len(lista))
        yield lista[member]
        lista.pop(member)

krotkaLista = [18,44,55,79,99,66]
GeneratorElementowLosowych = podajKolejnyElementLosowyZListy(krotkaLista)

for i in GeneratorElementowLosowych:
    print(i, end="  ")

print(krotkaLista)
print(GeneratorElementowLosowych)
'''

###########################################################
##### Comprehension List         ##########################
###########################################################

##### Wydrukuj co czwartę liczbę mniejszą od stu ##########
'''
print([i for i in range(100) if i % 4 == 0])
print([[0 for _ in range(5)] for _ in range(5)])
'''

###########################################################
##### Iterator                   ##########################
###########################################################


'''
napis = "DlugiNapis"
iterator = iter(napis)
nextt = iterator.__next__
print(next(iterator))
print(next(iterator))
print(next(iterator))
print(nextt())

iteratorEksperyment = (i * 5 for i in range(5) if i%2==0) 
  
print(next(iteratorEksperyment))
print(next(iteratorEksperyment))
print(next(iteratorEksperyment))
print(next(iteratorEksperyment))

for i in iteratorEksperyment: 
    print(i, end=" ")
'''

#########################################################################################################
#####   Iterator w definicji klasy (OPCJONALNIE)                                                    #####
#####   https://www.programiz.com/python-programming/iterator                                       #####
#########################################################################################################
'''
# w poniższej klasie powinniśmy mieć definicję zarówno nexta jak i iter aby móc korzystać z metody next i pętli for

class PotegaDwojki:
    def __init__(self, max=0):
        self.n = 0
        self.max = max

    def __iter__(self):
        #if self.n <= self.max:
            #result = 2 ** self.n
            #self.n += 1
            #return result

        #while self.n <= self.max:
            #result = 2 ** self.n
            #self.n += 1
            #yield result
            
        #return self


    def __next__(self):
        while self.n <= self.max:
            result = 2 ** self.n
            self.n += 1
            yield result

        
        if self.n <= self.max:
            result = 2 ** self.n
            self.n += 1
            return result
        else:
            raise StopIteration

potegowanie = PotegaDwojki(8)  
#nexty = next(potegowanie)
for i in potegowanie:
    print(i)
'''
#print(next(potegowanie))
#print(next(nexty))
#print(next(potegowanie))
#print(next(potegowanie))
#print(next(potegowanie))
#print(next(potegowanie))