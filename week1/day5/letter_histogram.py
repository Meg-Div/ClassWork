#Letter Summary: 
# Write a letter_histogram program that asks the user for input, 
# and prints a dictionary containing the tally of 
# how many times each letter in the alphabet was used in the word. 
# For example:
#python letter_histogram.py 
# Please enter a word: banana 
# {'a': 3, 'b': 1, 'n': 2} 
# In this exercise, are you using dynamic keys or fixed keys?

word = input("Please enter a word: ")

my_dictionary = {}

for letter in word:
    my_dictionary[letter] = word.count(letter)

print(my_dictionary)