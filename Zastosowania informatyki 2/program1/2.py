#########################################################################################################
##### Date: 2024                                                                                    #####
##### Stream: Python Based Automation                                                               #####
##### Author: sbala@uni.opole.pl                                                                    #####
##### Subject: Podstawy pythona - iteratory, biblioteka itertools                                   #####
#########################################################################################################
# -*- coding:  windows-1250 -*-
import itertools
import   random

###########################################################
##### Lista wykorzystanych Metod ##########################
###########################################################

##### * count()
##### - zip_longest()
##### * cycle()
##### - repeat()
##### - accumulate()
##### - chain()
##### - chain.from_iterable()
##### - compress()
##### - dropwhile()
##### * filterfalse()
##### * groupby()
##### * islice()
##### - starmap()
##### - takewhile()
##### - product()
##### * permutations()
##### * combinations()
##### * combinations_with_replacement()


###########################################################
##### Count                      ##########################
###########################################################

'''
import math

def countPrzyklad():
    citerator = (itertools.count(start=0, step=math.pi/3))
    print("Lista cos pewnych wielokrotności pi/3:",  
        list(math.cos(next(citerator)) for _ in range(30)))
        
countPrzyklad();    
'''
###########################################################
##### islice                                        #######
###########################################################
'''
wynik = itertools.islice(range(22),0,22,3)
wynik = itertools.islice(range(22),5)
for element in wynik:
    print(element)
'''


'''
# wygenerował GPT4
def process_lines(filename, start, stop, step):
    with open(filename, 'r') as file:
        # Use islice to read every 'step' line between 'start' and 'stop'
        for line in itertools.islice(file, start, stop, step):
            # Perform some operation on each line (e.g., print, analyze, etc.)
            print(line.strip())

# Example usage
# This will read every 10th line from lines 100 to 200 in the file
process_lines('large_text_file.txt', start=10, stop=20, step=2)
'''
###########################################################
##### Cycle                                         #######
###########################################################
'''
def cyclePrzyklad():
    data = [100,200,300,400]
    cyciterator=(itertools.cycle(data))
    for _ in range(12):
        print(next(cyciterator), end = " ")

    print()

    data2 = ('On', 'Off')
    cyciterator=(itertools.cycle(data2))
    for _ in range(12):
        print(next(cyciterator), end = " ")

cyclePrzyklad()

# Zaczerpnięte z https://docs.python.org/3/library/itertools.html#itertools.count
'''


def roundRobin(*iterowalny):
    
    liczbaNieobsluzonychProcesow = len(iterowalny)
    # ciekawa konstrukcja -- branie kolejnego iteratora w cyklu
    nastepniki = itertools.cycle(iter(it).__next__ for it in iterowalny)
    #print(next(nastepniki))
    #print(next(nastepniki))
    #print(next(nastepniki))
    #print(next(nastepniki))
    #itx = next(nastepniki)
    #print(itx())
    #print(itx())
    #print(itx())
    
    while liczbaNieobsluzonychProcesow:
        try:
            for nastepny in nastepniki:
                print(nastepny)
                yield nastepny()

        except StopIteration:
            #print("@@@",next(nastepniki),"@@@")
            # Usuń itertor który nie ma już po czym iterować.
            # Jeśli trzeci jest pierwszy to drugi jest ostatni!
            liczbaNieobsluzonychProcesow -= 1
            print(liczbaNieobsluzonychProcesow)
            nastepniki = itertools.cycle(itertools.islice(nastepniki, liczbaNieobsluzonychProcesow))


generator = roundRobin('ABC', 'D', 'EF')
for literka in generator:
    print(literka)
    print(end="")

###########################################################
##### Comprehension List         ##########################
###########################################################

##### Wydrukuj co czwartę liczbę mniejszą od stu ##########
'''
print([i for i in range(100) if i % 4 == 0])
print([[0 for _ in range(5)] for _ in range(5)])
'''

###########################################################
##### Combinatoral Iterators                        #######
##### Combinations and Permutations                 #######
###########################################################

##### Klucz : Etykieta Towaru                                    #####
##### (x,y) x:  Wolumen towaru                                   #####
##### (x,y) y:  Cena całego wolumenu                             #####
##### Cito numOfLoc: Możemy pojechać do numOfLoc jednocześnie    #####
##### PriceLimit: Możemy zapłacić  PriceLimit                    #####
##### ItemsReq:  Potrzebujemy zebrać liczbę przedmiotów ItemsReq #####
''''
def combinationAndPermutationExample():

    letters = ['a','b','c','d','e', 'f', 'g']
    numbers = [0,1,2,3]

    result = itertools.combinations(letters,4)
    for item in result:
        print(item)

    result = itertools.permutations(letters,3)

    for item in result:
        print(item)
    
    #kombinacje z powtórzeniami
    result = itertools.combinations_with_replacement(numbers,4)
    for item in result:
        print(item)

combinationAndPermutationExample()
'''
'''
def Sums(ItemsLocations, ComboIterEl):
    Sums = tuple(sum(y) for y in zip(*[ItemsLocations[A] for A in  ComboIterEl]))
    return Sums
    
def predicate(x,ItemsReq, PriceLimit):
    return not (x[1] >= ItemsReq and x[2] <= PriceLimit)

def findGoodEnoughCombinationOfItemsLocation():
    ItemsLocationsVolumsAndPrices = {
            'Kalisz': (1,14), 'Poznan': (2,8), 'Racibórz': (4,6), 'Wieluń': (6,6), 'Opole': (8,12), 'Bytom': (9,11) , 'Gliwice': (14,20), 'Gorzów': (4,6) 
        }
    keysList = list(ItemsLocationsVolumsAndPrices.keys())  
    numOfLoc = 4
    ItemsReq = 20
    PriceLimit = 36
    comboIter = itertools.combinations(keysList, numOfLoc)
    #print(keysList)
    #print(*[x for x in comboIter], sep ="\n")
    FullInfo = [(x, *Sums(ItemsLocationsVolumsAndPrices, x)) for x in comboIter]
    #print(*FullInfo, sep="\n")
    #properCombo = itertools.filterfalse(lambda x : not (x[1] >= ItemsReq and x[2] <= PriceLimit), FullInfo)
    properCombo = itertools.filterfalse(lambda x : predicate(x,ItemsReq, PriceLimit), FullInfo)

    #print("Combo: ", next(properCombo))
    #print("Combo: ", next(properCombo))
    #print("Combo: ", next(properCombo))
    

    key_func = lambda x: x[2] 
    grupowanie = itertools.groupby(sorted([x for x in properCombo], key=key_func, reverse=True), key_func)

    for key, group in grupowanie: 
        print({key : list(group)})
    
                          
findGoodEnoughCombinationOfItemsLocation()
'''
###########################################################

###########################################################
##### Zadanie #############################################
###########################################################

# Wygenerować sensowne przykłady dla funkcji IterTools 
# zaznaczonych na liście jako -. Preferujemy złożoność 
# scenariusza ostatniego z tego pliku.