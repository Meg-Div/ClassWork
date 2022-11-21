#Due morning, 11-22

#be able to type a phone number
#be able to view all the phone numbers I have created up to that point 
#be able to add phone numbers
#be able to see the names of the people attached to each phone number
#be able to delete a specific phone number
#be able to add phone numbers until I specify a stop and then the game will quit

# The phone number needs to be in this format 
# 111-111-1111
# Use a class

class Entry:
    def __init__(self, name, number):
        self.name = name
        self.number = number

    def addName(self, nom):
        self.phoneNumbers.append(nom)
    def addNumber(self, number):
        self.phoneNumbers.append(number)

class Phonebook:
    def __init__(self):
        self.list = []

    def listAppend(self, user):
        self.list.append(user)

    def printlist(self):
        count = 1
        for person in self.list:
            print(f"{count}) Name: {person.name}, {person.number}") 
            count+=1

    def delete(self, n):
        for person in self.list:
            del self.list[n-1]

def menu():
    answer = "y"
    newPhoneBook = Phonebook()

    while(answer == "y"):
        title = input("Which person would you like to enter? \n")
        num = input("What is their number? \n")

        myPhoneBook = Entry(title, num)
        newPhoneBook.listAppend(myPhoneBook)
        
        answer = input("Would you like to add another? y or n \n")
            
    answer = input("Would you like to delete a number? y or n \n")

    if (answer == "y"):
        newPhoneBook.printlist()
        answer = input("Which one?\n")
        newPhoneBook.printlist()
        newPhoneBook.delete(int(answer))
        print("Here is your updated phonebook:")
        newPhoneBook.printlist()

print("Let's create a phonebook!")
menu()


