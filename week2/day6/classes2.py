#pets

#def animalsound
#hdef whoismyowner
#def what is my name
#def what kind of pet


class Pet:
    def __init__(self, noise, owner, name, breed):
        self.noise = noise
        self.owner = owner
        self.name = name
        self.breed = breed
    def animalSound(self):
        print(f"{self.noise}")
    def whoIsMyOwner(self):
        print(f"I am owned by {self.owner}")
    def whatIsMyName(self):
        print(f"My name is {self.name}")
    def whatAmI(self):
        print(f"I am a {self.breed}")

newPet = Pet("Purr", "Meg", "Fluffy", "cat")

newPet.animalSound()
newPet.whatAmI()
newPet.whoIsMyOwner()
newPet.whatIsMyName()
