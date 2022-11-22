#Create a new file called "assignment.py" in your week2 day 2 folder
#Write all code beneath each question/problem

# 1. Write a function called "nameFunction" have it print out your name. invoke the function

def nameFunction():
    print("Meg")

nameFunction()

#2. Define variable named Joe that is the string Joe

Joe = "Joe"

#3 Reinitialize Joe so that it is now the integer 4

Joe = 4

#4 Change Joe into a float

Joe = 3.14

#5. Create a list named students that includes 5 people from this class

students = ["Adam", "Jayelon", "Meg", "Vinni", "Jessika"]

#5a print the first item from the list(bonus for more than one way)

print(students[0])
print(students[-5])

#5b print the last item from the list(bonus for more than one way)

print(students[4])
print(students[-1])

#5c How do I get the third item from the list?

students[2]

#5d print the entire list not in brackets [student1, student2, etc...]

for student in students:
    print(student)

#5e add "is cool" to the end of each name


for student in students:
    print(f"{student} is cool")

#5f if the students name is your name add "IT ME!!" to the end

for student in students:
    if (student == "Meg"):
        print(student + "IT ME!!")
    else: 
        print(student)

#5g if you are not in the list print "I guess I'm not cool"

noMeg = ["Adam", "Jayelon", "Kennth", "Vinni", "Jessika"]

if "Meg" in noMeg:
    print("I'm here!")
else:
    print("I guess I'm not cool")

#5h list some methods to remove things from a list

del noMeg[0]
noMeg.remove(noMeg[0])
noMeg.pop()

#6 Create a dictionary with keys "Digital Crafts" ,"Instructor", "TA" and values "Bootcamp" ,"Joe" ,"Ethan"

dictDigitalCrafts = { 'Digital Crafts': 'Bootcamp', 'Instructor': 'Joe', 'TA': 'Ethan' }

#6a return the value of "Digital Crafts"

print(dictDigitalCrafts['Digital Crafts']) #bootcamp

for entry in dictDigitalCrafts:
    if (entry == "Digital Crafts"):
        print(entry)

#7 Write a class named Cars with attributes make,model,year, and type(sedan,truck,crossover, sportscar, etc....)

class Car:
    def __init__(self, make, model, year, type):
        self.make = make
        self.model = model
        self.year = year
        self.type = type
    def makeModel(self, user):
        print(user.make, user.model)
    def honkHorn(self):
        print("Beep Beep")

#7a Instantiate 3 new Cars

newCarOne = Car("Toyota", "Camry", "2002", "sedan")
newCarTwo = Car("Ford", "Taurus", "2011", "sedan")
newCarThree = Car("Chevrolet", "Camaro", "1990", "sportscar")
    
#7b Add a method that allows you to see the make and model of a car in your terminal

newCarOne.makeModel(newCarOne)

#7c Use the above method on the second car

newCarTwo.makeModel(newCarTwo)

#7d Add a method that is called "honkHorn" that prints "Beep Beep"

newCarThree.honkHorn()

#Push this all to a repo on your github
#Paste github link of assignment page to: https://digitalcrafts.instructure.com/courses/225/assignments/9345