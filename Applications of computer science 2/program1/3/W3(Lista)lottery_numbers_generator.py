import secrets
import csv
import json

# Configuration
sets = 10  # Number of sets to generate
numbers = 6  # Number of numbers in each set
number_range = range(0, 50)  # Range of numbers (0 to 49)


# def...
def secrets_sample(population, k):
    if k > len(population):
        raise ValueError

    selected = set()
    while len(selected) < k:
        chosen = secrets.choice(population)
        selected.add(chosen)  # add it to the set => duplicate will be ignored

    return list(selected)


lottery_numbers = [secrets_sample(number_range, numbers) for _ in range(sets)]


# print lottery sets
for idx, set_of_numbers in enumerate(lottery_numbers, start=1):
    print(f"Set: {idx}: {set_of_numbers}")


# Save to CSV file
with open("lottery_numbers.csv", "w", newline="") as csvFile:
    csv_write = csv.writer(csvFile)
    csv_write.writerow(["Set Number", "Number"])  # header
    for idx, set_of_numbers in enumerate(lottery_numbers, start=1):
        csv_write.writerow([idx, set_of_numbers])

# save to json file
with open("lottery_numbers.json", "w") as jsonFile:
    json.dump(lottery_numbers, jsonFile)
