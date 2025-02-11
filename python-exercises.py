# Create good script to create new list, which only contains users from Poland. Try to do it with List Comprehension.
# users = [{"name": "Kamil", "country":"Poland", {"name":"John", "country": "USA"}, {"name": "Yeti"}]

users = [{"name": "Kamil", "country": "Poland"}, {"name": "John", "country": "USA"}, {"name": "Yeti"}]

polish_users = [user for user in users if user.get("country") == "Poland"]

print(polish_users)


# Display sum of first ten elements starting from element 5: 
# numbers = [1,5,2,3,1,4,1,23,12,2,3,1,2,31,23,1,2,3,1,23,1,2,3,123]


numbers = [1, 5, 2, 3, 1, 4, 1, 23, 12, 2, 3, 1, 2, 31, 23, 1, 2, 3, 1, 23, 1, 2, 3, 123]

sum_of_elements = sum(numbers[4:14])

print("Suma dziesięciu elementów zaczynając od elementu 5:", sum_of_elements)


# Fill list with powers of 2, n [1..20]

powers_of_two = [2 ** n for n in range(1, 21)]

print(powers_of_two)
