#########################################################################################################
##### Date: 2024                                                                                    #####
##### Stream: Python Based Automation                                                               #####
##### Author: sbala                                                                                 #####
##### Subject: Podstawy pythona - dekoratory                                                        #####
#########################################################################################################

import itertools
import random

#########################################################################################################
#####   Dekorator:  Jak opakować funkcję                                                            #####
#########################################################################################################

'''
def print_additional_message(func):
    def decorator():
        print("Decorator message")
        func()
    return decorator

@print_additional_message
def print_message():
    print("Original message")

print_message()

'''
# '''
import sys
sys.setrecursionlimit(1500)


def cache(func):
    mem = {}
    def myPrint(*args):
        print(*args)
        print('2222222222222222222222222')

    def inner(*args):
        myPrint()
        
        if args in mem:
            print(args)
            return mem[args]
        else: print(args)
 
        result = func(*args)
        mem[args] = result
        return result
    return inner

@cache
def fib(n,m):
    if n < 1:
        return 0
     
    if n == 1:
        return 1
     
    return fib(n - 1,m-1) + fib(n - 2,m-2)

print(fib(10,10))
#print(fib(200))
# '''

#########################################################################################################
##### Metody abstrakcyjne i przepisywanie metod                                                     #####
#####                                                                                               #####
#########################################################################################################
'''
from abc import ABC, abstractmethod

class Zwierze(ABC):  # Tworzymy klasę bazową, która dziedziczy po ABC
    @abstractmethod
    def dzwiek(self):
        pass

class Pies(Zwierze):  # Klasa pochodna
    def dzwiek(self):
        print("Pies Konkretny")
        return "Hau hau"

class Kot(Zwierze):  # Inna klasa pochodna
    def dzwiek(self):
        return "Miau"

class Rottweiler(Pies):  # Klasa pochodna
    def dzwiek(self):
        return "Wrr"

# pies = Zwierze()  # To spowodowałoby błąd, bo Zwierze jest klasą abstrakcyjną
pies = Pies()
grozny_pies = Rottweiler()
print(pies.dzwiek())  # Output: Hau hau
print(grozny_pies.dzwiek())  # Output: Wrr
'''

'''
from abc import ABCMeta, abstractmethod
import abc

class Appliance:
    __metaclass__=ABCMeta
    
    @abstractmethod
    def __init__(self, model, price):
        self.__model = model
        self.price = price
    def get_price(self):
        return self.__price
    def set_price(self, price):
        self.__price = price
        
    price = abc.abstractproperty(get_price, set_price)
    
    @property
    def model(self):
        return self.__model
    
class Cooker(Appliance):
    def __init__(self, model, price, fuel):
        super().__init__(model, price)
        self.fuel = fuel
    price = property(lambda self: super().price, lambda self, price: super().set_price(price))

'''

#########################################################################################################
##### @classmethod i @staticmethod                                                                  #####
#####                                                                                               #####
##### A class method takes class as the first parameter while a static method needs no specific     #####
##### parameters. A class method can access or modify the class state while a static method can’t   #####
##### access or modify it. In general, static methods know nothing about the class state.           #####
##### They are utility-type methods that take some parameters and work upon those parameters.       ##### 
##### On the other hand class methods must have class as a parameter. We use @classmethod decorator #####
##### in Python to create a class method and we use @staticmethod decorator to create a static      #####
##### method in Python.                                                                             #####
##### https://www.geeksforgeeks.org/classmethod-in-python/                                          #####                 
#########################################################################################################

'''
class Kls(object):
    no_inst = 0
 
    def __init__(self):
        Kls.no_inst = Kls.no_inst + 1
 
    @classmethod
    def get_no_of_instance(cls_obj):
        return cls_obj.no_inst

print(Kls.get_no_of_instance()) 
ik1 = Kls()
print(ik1.get_no_of_instance())
ik2 = Kls()
ik1.no_inst+=1
 
print(ik1.get_no_of_instance())
print(Kls.get_no_of_instance())
print(ik1.no_inst)
'''
'''
class Przyklad:
    licznik_instancji = 0  # Atrybut klasy

    def __init__(self):
        Przyklad.licznik_instancji += 1
        self.identyfikator_instancji= 40000 + Przyklad.licznik_instancji

    def print_identyfikator_instancji():
        print(f"Identyfikator Instancji: {self.identyfikator_instancji}")

    # Metoda statyczna
    @staticmethod
    def metoda_statyczna(number):
        print("To jest metoda statyczna.")
        print("Nie ma dostępu do klasy ani instancji.")

    # Metoda klasowa
    @classmethod
    def metoda_klasowa(cls,number):
        print("To jest metoda klasowa.")
        print(f"Dostęp do klasy: {cls}")
        print(f"Liczba instancji: {cls.licznik_instancji}")


# Tworzenie instancji klasy
obiekt1 = Przyklad()
obiekt2 = Przyklad()

# Wywołanie metod
Przyklad.metoda_statyczna(4)  # Wywołanie metody statycznej
Przyklad.metoda_klasowa(5)    # Wywołanie metody klasowej

obiekt1.metoda_statyczna(4)  # Można wywołać metodę statyczną z instancji
obiekt1.metoda_klasowa(5)    # Można wywołać metodę klasową z instancji

obiekt1.print_identyfikator_instancji(5)    # Można wywołać metodę klasową z instancji
'''
#########################################################################################################
##### kompozycje dekoratorów                                                                        #####
#########################################################################################################


'''
def p_decorate(func):
    def func_wrapper(name):
        return "<p>{0}</p>".format(func(name))
    return func_wrapper

def strong_decorate(func):
    def func_wrapper(name):
        return "<strong>{0}</strong>".format(func(name))
    return func_wrapper

def div_decorate(func):
    def func_wrapper(name):
        return "<div>{0}</div>".format(func(name))
    return func_wrapper

@div_decorate
@p_decorate
@strong_decorate
def get_text(name):
    return "cooking helped for a while, {0} my leg started hurting again ".format(name)

print(get_text("I guess I got bored,"))

def pp_decorate(func):
    def func_wrapper(*args, **kwargs):
        return "<p>{0}</p>".format(func(*args, **kwargs))
    return func_wrapper

class Person(object):
    def __init__(self):
        self.name = "John"
        self.family = "Doe"

    @pp_decorate
    def get_fullname(self):
        return self.name+" "+self.family
    
test_person = Person()
print(test_person.get_fullname())
'''

#########################################################################################################
##### @property                                                                                     #####
#########################################################################################################
'''
class Propp(object):
    def __init__(self,init):
        self.__y=init
    
    @property
    def cond(self):
        return self.__y
    
    @cond.setter
    def cond(self,value):
        if not (value == self.__y):
            self.__y=value
            print('Yes changes !')
        else: 
            print('No changes !')
    

Y=Propp(7)
print(Y.cond)
Y.cond=7
Y.cond=9
print(Y.cond)
#Y.cond(12)
print(Y.cond)
print("Bum: ", Y._Propp__y)
'''
'''
class Osoba:
    def __init__(self, imie, wiek):
        self._imie = imie        # Używamy jednego podkreślenia, by sugerować, że jest to zmienna "prywatna"
        self._wiek = wiek

    # Getter - metoda zwracająca wartość atrybutu
    @property
    def wiek(self):
        print("Pobieranie wieku...")
        return self._wiek

    # Setter - metoda ustawiająca wartość atrybutu
    @wiek.setter
    def wiek(self, nowy_wiek):
        if nowy_wiek < 0:
            raise ValueError("Wiek nie może być ujemny!")
        print("Ustawianie nowego wieku...")
        self._wiek = nowy_wiek

    # Deleter - metoda usuwająca atrybut
    @wiek.deleter
    def wiek(self):
        print("Usuwanie wieku...")
        del self._wiek

    @property
    def imie(self):
        print("Pobieranie imienia...")
        return self._imie

# Tworzymy obiekt klasy Osoba
osoba = Osoba("Jan", 25)

# Używamy getter'a
print(osoba.wiek)  # Output: Pobieranie wieku... 25

# Używamy setter'a, aby zmienić wiek
osoba.wiek = 30    # Output: Ustawianie nowego wieku...

# Ponowne użycie getter'a
print(osoba.wiek)  # Output: Pobieranie wieku... 30

# Usuwanie atrybutu przy pomocy deleter'a
del osoba.wiek     # Output: Usuwanie wieku...

try:
    print(osoba.imie)
except AttributeError as e:
    print(f"Błąd: {e}")

# Próba dostępu do usuniętego atrybutu (spowoduje błąd)
try:
    print(osoba.wiek)
except AttributeError as e:
    print(f"Błąd: {e}")
'''

#########################################################################################################
##### Coś o metodach prywatnych                                                                     #####
#########################################################################################################

'''
class Przyklad:
    def __init__(self, wartosc):
        self.wartosc = wartosc

    # Prywatna metoda
    def __prywatna_metoda(self):
        print(f"To jest prywatna metoda. Wartość: {self.wartosc}")

    # Publiczna metoda, która wywołuje prywatną metodę
    def publiczna_metoda(self):
        print("Wywołanie prywatnej metody z publicznej:")
        self.__prywatna_metoda()

# Tworzenie obiektu
obiekt = Przyklad(42)

# Próba wywołania prywatnej metody bezpośrednio
try:
    obiekt.__prywatna_metoda()  # To spowoduje błąd
except AttributeError as e:
    print(f"Błąd: {e}")

# Wywołanie prywatnej metody poprzez publiczną metodę
obiekt.publiczna_metoda()

# Uzyskanie dostępu do prywatnej metody przez name mangling
obiekt._Przyklad__prywatna_metoda()
'''

'''
https://www.google.pl/url?sa=t&source=web&rct=j&opi=89978449&url=https://chyla.org/_static/files/edukacja/materialy/zaawansowane-
techniki-programowania-w-jezyku-python/Lista-zadan-Dekoratory.pdf&ved=2ahUKEwjnueiIgaCJAxVTGhAIHWpHIuUQFnoECBEQAQ&usg=AOvVaw0DeISBnal7A-4yC3LRZord
Napisz program, który do uruchomienia będzie wymagał nazwy użytkownika i hasła
lub wybrania opcji logowanie anonimowe. Napisz dekorator o nazwie login_required, któ-
ry zaaplikowany do dowolnej funkcji zweryfikuje czy użytkownik zalogował się poprawnie.
W przypadku, gdy:
•użytkownik zalogował się poprawnie, dekorator powinien wywoływać otaczanąfunkcję,
•użytkownik nie został zalogowany, dekorator powinien rzucić wyjątek o nazwie NotLoggedIn.
Przykład działania:
Zaloguj się
    uzytkownik: jan
    haslo: kowalski
Menu
    1. Wypisz hello
    2. Zakoncz
Wybor: 1
    Hello
    Przykład działania:
Zaloguj się
    uzytkownik: anonim
Menu
    1. Wypisz hello
    2. Zakoncz
    Wybor: 1
Musisz sie zalogowac
'''