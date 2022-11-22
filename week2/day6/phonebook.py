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

class Phonebook:
    def __init__(self):
        self.list = []

    #adds entry to list
    def listAppend(self, user):
        self.list.append(user)

    #prints list, counts entries
    def printlist(self):
        count = 1
        for person in self.list:
            print(f"{count}) {person.name}: {person.number}") 
            count+=1

    #removes entry from list
    def delete(self, n):
        for person in self.list:
            del self.list[n-1]

#menu function
def menu():
    answer = "y"
    #create a new instance of class
    newPhoneBook = Phonebook()

    #while you would still like to use your phonebook
    while(answer == "y"):
        title = input("Which person would you like to enter? \n")
        num = input("What is their number? \nPlease enter in this format: 555-555-5555 \n")

        #if the string doesn't contain "-" and isn't the correct length
        #prompt user for new entry
        while (num.find("-") == -1 or len(num) != 12):
            num = input("Please enter a number in this format: 555-555-5555 \n")

        #create new phonebook with all entries
        myPhoneBook = Entry(title, num)
        #add phonebook to the class array
        newPhoneBook.listAppend(myPhoneBook)
        
        answer = input("Would you like to add another? y or n \n")
            
    answer = input("Would you like to delete a number? y or n \n")

    #print the list and ask user to choose entry to delete
    while (answer == "y"):
        newPhoneBook.printlist()
        answer = input("Which one?\n")
        newPhoneBook.printlist()

        #change the string answer to an int
        newPhoneBook.delete(int(answer))
        print("Here is your updated phonebook:")
        newPhoneBook.printlist()
        answer = input("Would you like to delete another number? y or n \n")
    
    print("Enjoy your phonebook!")

print("Let's create a phonebook!")
menu()


