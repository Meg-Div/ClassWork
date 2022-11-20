#Word Summary: Write a word_histogram program that asks the user for a sentence as its input,
#  and prints a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

#python word_histogram.py 
# Please enter a sentence: To be or not to be {'to': 2, 'be': 2, 'or': 1, 'not': 1} 
#In this exercise, are you using dynamic keys or fixed keys?

word = input("Please enter a sentence: ")

my_dictionary = {}

print(word.split())

for letter in word.split():
    my_dictionary[letter] = word.count(letter)

print(my_dictionary)
