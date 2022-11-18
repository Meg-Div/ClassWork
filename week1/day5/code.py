fruit = ["Apple", "Pear"]
print(fruit[0])

#iterate through list and find zeros to end
numbers = [1,2,5,0,7,0,9,0,2,0,2,3]

numbers.sort()

for number in numbers:
    if (number == 0):
        numbers.remove(number) 
        numbers.append(0)

print(numbers)

