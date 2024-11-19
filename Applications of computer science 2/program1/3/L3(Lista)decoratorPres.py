"""
Zadanie1: Logowanie
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
"""


class NotLoggedIn(Exception):
    """Custom exception for when a user is not logged in."""

    pass


class User:
    def __init__(self, username=None, password=None):
        self.username = username
        self.is_authenticated = False

    def login(self, username, password=None):
        """
        Login method with support for anonymous login
        """
        if username == "anonim":
            self.username = "c"
            self.is_authenticated = True
        elif username and password:
            # You could add more sophisticated authentication here
            self.username = username
            self.is_authenticated = True
        else:
            self.is_authenticated = False

        return self.is_authenticated


def login_required(func):
    """
    Decorator to check if user is logged in before executing a function
    """

    def wrapper(user, *args, **kwargs):
        if not user.is_authenticated:
            raise NotLoggedIn("Musisz sie zalogowac")
        return func(user, *args, **kwargs)

    return wrapper


class Application:
    def __init__(self):
        self.user = User()

    def login_screen(self):
        """
        Display login screen and handle login process
        """
        print("Zaloguj się")
        username = input("uzytkownik: ")
        password = input("haslo: ") if username != "anonim" else None

        if self.user.login(username, password):
            print("Logowanie udane!")
            return True
        else:
            print("Logowanie nieudane!")
            return False

    @login_required
    def hello_function(self, user):
        """
        Example function that requires login
        """
        print("Hello")

    def run(self):
        """
        Main application loop
        """
        while True:
            # If not logged in, show login screen
            if not self.user.is_authenticated:
                self.login_screen()

            # Show menu
            print("\nMenu")
            print("1. Wypisz hello")
            print("2. Zakoncz")

            try:
                choice = input("Wybor: ")

                if choice == "1":
                    # This will require login due to the decorator
                    self.hello_function(self.user)
                elif choice == "2":
                    break
                else:
                    print("Nieprawidłowy wybór")

            except NotLoggedIn as e:
                print(str(e))


def main():
    app = Application()
    app.run()


if __name__ == "__main__":
    main()


"""
Zadanie2: System Zarządzania Salonem Samochodowym
Opis zadania

Stwórz system zarządzania salonem samochodowym, który pozwala na dodawanie różnych typów samochodów, wyświetlanie dostępnych pojazdów wraz z ich cenami i specyfikacjami oraz aktualizację cen. Użyj abstrakcyjnej klasy Vehicle jako klasy bazowej dla innych klas reprezentujących konkretne typy samochodów, takich jak Sedan i SUV.
Wymagania

    Klasa Vehicle:
        Stwórz klasę abstrakcyjną Vehicle, która będzie miała:
            Abstrakcyjny konstruktor (__init__), przyjmujący markę, model oraz cenę samochodu.
            Abstrakcyjną właściwość price (z getterem i setterem), która pozwala na uzyskanie lub ustawienie ceny samochodu.
            Właściwość model, która zwraca model samochodu.
            Właściwość brand, która zwraca markę samochodu.

    Klasa Sedan:
        Utwórz klasę Sedan, która dziedziczy po Vehicle i implementuje:
            Konstruktor przyjmujący markę, model, cenę i pojemność bagażnika (w litrach).
            Właściwość price, która pozwala na pobieranie i ustawianie ceny.
            Właściwość trunk_size, która zwraca pojemność bagażnika.

    Klasa SUV:
        Utwórz klasę SUV, która dziedziczy po Vehicle i implementuje:
            Konstruktor przyjmujący markę, model, cenę i informację o napędzie (czy jest to 4x4).
            Właściwość price, która pozwala na pobieranie i ustawianie ceny.
            Właściwość is_4x4, która zwraca wartość logiczną (True/False) informującą, czy SUV ma napęd 4x4.

    Klasa CarDealership:
        Stwórz klasę CarDealership, która będzie miała:
            Listę przechowującą samochody (obiekty Vehicle).
            Metodę add_vehicle(vehicle), która dodaje nowy samochód do inwentarza.
            Metodę display_inventory(), która wyświetla wszystkie dostępne samochody wraz z ich cenami i specyfikacjami.
            Metodę update_price(model, new_price), która aktualizuje cenę samochodu na podstawie jego modelu.

    Testowanie:
        W funkcji głównej przetestuj swój system, tworząc kilka obiektów Sedan i SUV, dodając je do CarDealership, wyświetlając inwentarz oraz aktualizując ceny samochodów.

Dodatkowe wyzwania (opcjonalnie)

    Dodaj obsługę wyjątków, aby upewnić się, że cena nie może być ujemna.
    Stwórz dodatkową klasę Truck, która również dziedziczy po Vehicle, z unikalną właściwością max_load (maksymalny ładunek w kilogramach).
    Zaimplementuj filtrowanie pojazdów według typu, aby móc wyświetlić np. tylko SUV-y lub tylko Sedany.

"""
