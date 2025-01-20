from functools import wraps


class NotLoggedIn(Exception):
    pass


class UserDatabase:
    def __init__(self):
        # secret ;)
        self.users = {
            "admin": {"password": "admin", "role": "admin"},
            "user": {"password": "user", "role": "user"},
            "k": {"password": "k", "role": "user"},
        }


class AuthSystem:
    def __init__(self):
        self.current_user = None
        self.user_db = UserDatabase()

    def login(self, username: str, password: str) -> bool:
        if username in self.user_db.users:
            if self.user_db.users[username]["password"] == password:
                self.current_user = username
                return True
        return False

    def logout(self):
        self.current_user = None

    def is_logged_in(self) -> bool:
        return self.current_user is not None

    def get_current_user(self) -> str:
        return self.current_user


def login_required(func):
    @wraps(func)
    def wrapper(self, *args, **kwargs):
        if not self.auth.is_logged_in():
            raise NotLoggedIn("Musisz być zalogowany, aby wykonać tę operację!")
        return func(self, *args, **kwargs)

    return wrapper


class Application:
    def __init__(self):
        self.auth = AuthSystem()

    def login_prompt(self):
        print("=== System Logowania ===")
        username = input("Nazwa użytkownika: ")
        if username.lower() == "anonim":
            print("Zalogowano jako anonim (ograniczony dostęp)")
            return True

        password = input("Hasło: ")

        if self.auth.login(username, password):
            print()
            print(f"Zalogowano pomyślnie jako {username}")
            return True
        else:
            print()
            print("Błędne dane logowania!")
            return False

    @login_required
    def secure_operation(self):
        print(
            f"Wykonuję bezpieczną operację dla użytkownika: {self.auth.get_current_user()}"
        )

    @login_required
    def secure_operation_1(self):
        print("Mysisz się zalogować, aby wykonać tę operację")

    def run(self):
        while True:
            print("\nMenu:")
            print("1. Zaloguj się")
            print("2. bezpieczna operację")
            print("3. bezpieczna operację 1")
            print("4. Wyloguj się")
            print("5. Zakończ")

            choice = input("Wybór: ")
            print("")

            try:
                if choice == "1":
                    self.login_prompt()
                elif choice == "2":
                    self.secure_operation()
                elif choice == "3":
                    self.secure_operation_1()
                elif choice == "4":
                    self.auth.logout()
                    print("Wylogowano pomyślnie")
                elif choice == "5":
                    break
                else:
                    print("Nieprawidłowy wybór!")
            except NotLoggedIn as e:
                print(f"Błąd: {e}")


if __name__ == "__main__":
    app = Application()
    app.run()
