##### - zip_longest()
'''
from itertools import zip_longest

def zipLongestExample():
    # Sample data lists of unequal lengths
    data1 = ['Alice', 'Bob', 'Charlie']
    data2 = [25, 30]  # Shorter list
    data3 = ['Engineer', 'Designer', 'Manager', 'Director']  # Longer list

    # Using zip_longest to combine the lists
    combined = zip_longest(data1, data2, data3, fillvalue='N/A')
    return combined

myList = zipLongestExample()
def generator():
    for item in myList:
        yield item

generatedItems = generator()
# print(next(generatedItems))
# print(next(generatedItems))
# print(next(generatedItems))
# print(next(generatedItems))
'''



# ##### - repeat()
'''
from itertools import repeat

def repeat_message(message, count):
    for _ in repeat(message, count):
        print(message)

# Wywołanie funkcji, aby powtórzyć komunikat "Hello, World!" 5 razy
repeat_message("Hello, World!", 5)
'''

'''
# Tworzenie listy o długości 10, wypełnionej wartością 0
zeros = list(repeat(0, 10))
print(zeros)
'''

##### - accumulate()
'''
from itertools import accumulate

def cumulative_sum():
    monthly_revenue = [1, 22, 333, 3334, 20008]
    
    # Obliczanie narastających sum
    cumulative_revenue = list(accumulate(monthly_revenue))

    # Wyświetlenie narastających dochodów
    for month, revenue in enumerate(cumulative_revenue, 1):
        print(f"Miesiąc {month}: Łączny dochód = {revenue}")

# Wywołanie funkcji
cumulative_sum()
'''


##### - chain()
'''
from itertools import chain

def flatten_orders():
    orders = [
        ["Apple", "Banana"],
        ["Orange", "Grapes", "Mango"],
        ["Tomato", "Cucumber"]
    ]
    list_data = [1, 2, 3]
    tuple_data = (4, 5, 6)
    set_data = {7, 8, 9}

    # Połączenie wszystkich przedmiotów
    all_items = list(chain(orders,list_data,tuple_data,set_data))

    # Wyświetlenie listy przedmiotów
    print("Wszystkie przedmioty:", all_items)

# Wywołanie funkcji
flatten_orders()
'''

'''
from itertools import chain
def flatten_orders():
    orders = [
        ["Apple", "Banana"],
        ["Orange", "Grapes", "Mango"],
        ["Tomato", "Cucumber"]
    ]

    # Połączenie wszystkich przedmiotów
    all_items = list(chain.from_iterable(orders))

    # Wyświetlenie listy przedmiotów
    print("Wszystkie przedmioty:", all_items)

# Wywołanie funkcji
flatten_orders()
'''



##### - compress()
'''
from itertools import compress

def filter_available_products():
    products = ["Laptop", "Phone", "Tablet", "Monitor"]
    availability = [True, False, True, False]  # Tylko Laptop i Tablet są dostępne

    available_products = list(compress(products, availability))

    print("Dostępne produkty:", available_products)

filter_available_products()
# Dostępne produkty: ['Laptop', 'Tablet']
'''


##### - dropwhile()
'''
from itertools import dropwhile

def filter_temperatures():
    temperatures = [30, 40, 50, 45, 39, 32, 34, 35, 24, 19, 12, 18, 23, 29, 28, 25, 23]

    # Change the predicate to drop temperatures while they are greater than or equal to 32
    predicable = lambda x: x > 20
    lower_temperatures = list(dropwhile(predicable, temperatures))

    # Display the lower temperatures
    print(lower_temperatures)#????????!!!

# Call the function
filter_temperatures()
'''


'''
from itertools import dropwhile

numbers = [1, 2, 3, 4, 5, 6]
predicate = lambda x: x < 4
result = list(dropwhile(predicate, numbers))
print(result)  # Output: [4, 5, 6]
'''


##### - starmap()
'''
from itertools import starmap

# Define a function that takes two arguments
def add(x, y):
    return x + y

# An iterable of tuples
numbers = [(1, 2), (3, 4), (5, 6)]

# Using starmap to apply the add function to each tuple
result = list(starmap(add, numbers))

print(result)  # Output: [3, 7, 11]
'''


##### - takewhile()
'''
from itertools import takewhile

# Sample list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# Predicate function to take elements while they are less than 30
predicate = lambda x: x < 6

# Using takewhile
result = list(takewhile(predicate, numbers))

print(result)  # Output: [1, 2, 3, 4, 5]
'''


##### - product()
'''
from itertools import product

# Sample attributes for a product
colors = ['red', 'blue']
sizes = ['S', 'M', 'L']
types = ['t-shirt', 'hoodie']

# Compute the Cartesian product of the attributes
product_combinations = list(product(colors, sizes, types))

# Display the results
for combination in product_combinations:
    print(combination)
'''
