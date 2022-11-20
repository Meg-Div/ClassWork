
word = input("Please enter a sentence: ")

my_dictionary = {}

print(word.split())

for letter in word.split():
    my_dictionary[letter] = word.count(letter)

print(my_dictionary)

#Bonus Challenge: Given a histogram tally 
# (one returned from either letter_histogram or word_summary), print the top 3 words or letters.

print(min(my_dictionary.items(), key=lambda letter: letter[1]))
print(max(my_dictionary.items(), key=lambda letter: letter[1]))
