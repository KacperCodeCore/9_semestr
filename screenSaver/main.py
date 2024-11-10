import pyautogui
import time
import os
from PIL import ImageGrab


def open_google_calendar():
    # Otwórz menu Start i wyszukaj Google Calendar
    pyautogui.press('winleft')  # Otwórz menu Start
    time.sleep(1)
    pyautogui.write('Google Calendar')  # Wpisz nazwę aplikacji
    time.sleep(1)
    pyautogui.press('enter')  # Naciśnij Enter, aby otworzyć aplikację
    time.sleep(5)  # Czekaj, aż aplikacja się uruchomi


# def maximize_window():
#     # Naciśnij Win + Góra, aby maksymalizować okno
#     pyautogui.hotkey('win', 'up')
#     time.sleep(1)


def enter_fullscreen():
    # Symuluj naciśnięcie klawisza F11, aby przejść w tryb pełnoekranowy
    pyautogui.press('f11')


def capture_screenshot():
    # Pobierz ścieżkę folderu, gdzie znajduje się plik main.py
    project_folder = os.path.dirname(os.path.abspath(__file__))
    screenshot_path = os.path.join(project_folder, 'google_calendar_screenshot.png')

    # Zrób zrzut ekranu
    screenshot = ImageGrab.grab()
    screenshot.save(screenshot_path)
    print(f"Zrzut ekranu zapisany w: {screenshot_path}")


def close_google_calendar():
    # Zamykanie aplikacji za pomocą skrótu Alt + F4
    pyautogui.hotkey('alt', 'f4')


# Główna logika skryptu
print("Otwieranie nowego okna Google Calendar...")
open_google_calendar()

# # Maksymalizacja okna
# maximize_window()

# Przejdź do trybu pełnoekranowego
enter_fullscreen()

# Przenieś kursor w inne miejsce, aby ukryć go (opcjonalnie)
pyautogui.moveTo(1080, 1920)  # Przesunięcie kursora w róg ekranu

# Czekaj chwilę, aby upewnić się, że okno jest maksymalizowane i w pełnoekranie
time.sleep(5)

# Zrób zrzut ekranu
capture_screenshot()

# Zamknij Google Calendar po zrobieniu zrzutu ekranu
close_google_calendar()
