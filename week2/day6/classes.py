#print("Hello World")
# a class with relate to a singular value
#any funtions you do in Python need a parameter
class Student:
    def __init__ (self, name, age, userName):
        self.name = name
        self.age = age
        self.userName = userName
    def greeting(self):
        print(f"Hello my name is {self.name}")
    
Meg = Student("Meg", 21, "Meg-Div")

Meg.greeting()


