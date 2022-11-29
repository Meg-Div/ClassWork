#Article writeup up my process:
#https://medium.com/@meg_d/thats-a-hat-97a93c3ea0a8

import random
import time

class Hero:
    def __init__(self):
        self.hats = ["Stetson", "Fedora", "Top hat", "Baseball hat", "Beret"]
        self.tehCloud = [["rope", "horse", "hay bale", "spur", "cow"],["cigar", "lighter", "bottle of bourbon", "glass of whiskey", "piano"], 
        ["rabbit", "white glove", "pocket watch", "cane", "necklace"], ["stick of gum", "baseball bat", "baseball", "hotdog", "peanut"], 
        ["baguette", "square of cheese", "bottle of wine", "vespa", "mouse"]]
        self.eat = [10, 20, 30]
        self.winLose = ["increased", "decreased"]
        self.police = ["the police do not seem impacted", "the police look bored", "the police look scared", "the police look terrified"]
        self.herosHats = []
        self.cloudItems = []
        self.health = 20
        self.actions = ["eat it to attempt to increase your health", "use it to attempt to get away from the police"]
    def chooseAction(self):
        time.sleep(3)
        action = input("""Would you like to:
1) Eat it to attempt to increase your health
2) Use it to attempt to get away from the police
Your choice: """)
        if (action.isnumeric() is False):
            print("\nPlease choose 1 or 2:")
            action = self.chooseAction()
        if (action.isnumeric() is True and int(action) < 1 or int(action) > 2):
            print("\nPlease choose 1 or 2:")
            action = self.chooseAction()
        return action
    def hatOne(self):
        response = input(f"""Which hat do you put on first?

1) {firstHat}
2) {secondHat}
Your choice: """)
        if (response.isnumeric() is False):
            print("Please choose 1 or 2.\n")
            response = self.hatOne()
        if (response.isnumeric() is True and int(response) < 1 or int(response) > 2):
            print("Please choose 1 or 2.\n")
            response = self.hatOne()
        return response
    def cloudHats(self, hat):
        self.cloudItems.append(hat)
    def carryHats(self, hat):
        self.herosHats.append(hat)
    def useDistraction(self, item):
        random.shuffle(self.police)
        response = self.police[0]
        print(f"\nYou put your hat back on and use your {item} as a distraction,")
        print(f"and {response}.")
        if (response == "the police do not seem impacted"):
            print("\nSo you lose some of your confidence and your health.")
            self.health = 0 if self.health - 10 < 0 else self.health - 10
        if (response == "the police look bored"):
            print("\nSo you lose some of your confidence and your health.")
            self.health = 0 if self.health - 20 < 0 else self.health - 20
        if (response == "the police look scared"):
            print("\nIt boosts your confidence and your health enough to try again!")
            self.health = 100 if self.health + 10 > 100 else self.health + 10
        if (response == "the police look terrified"):
            print("\nIt boosts your confidence and your health enough to try again!")
            self.health = 100 if self.health + 20 > 100 else self.health + 20
        if (self.health != 0):
            time.sleep(3)
            print(f"Your health is now at: {self.health} / 100\n")
    def eatItem(self, item):
        random.shuffle(self.winLose)
        random.shuffle(self.eat)
        change = self.winLose[0]
        if (change == "increased"):
            self.health = 100 if (self.health + self.eat[0] > 100) else (self.health + self.eat[0])
            print(f"\nYou put your hat back on and eat the {item}.")
            time.sleep(3)
            print(f"The {item} has given you strength!")
            time.sleep(3)
            print(f"\nYour health is now at: {self.health} / 100\n")
        else:
            self.health = 0 if (self.health - self.eat[0] < 0) else (self.health - self.eat[0])
            print(f"\nYou put your hat back on and eat the {item}.")
            time.sleep(3)
            print(f"But the {item} has poisoned you!")
            time.sleep(3)
            if (self.health != 0):
                print(f"\nYour health is now at: {self.health} / 100\n")
    def reachInBag(self):
        random.shuffle(self.cloudItems[0])
        item = self.cloudItems[0][0]
        time.sleep(3)
        print(f"Pulling off the {self.herosHats[0]} you reach inside and pull out a ...")
        time.sleep(3)
        print(f"\n{item}!\n")
        del self.cloudItems[0][0]
        return item
    def chooseHat(self):
        response = input("""
        1) Stetson
        2) Fedora
        3) Top hat
        4) Baseball
        5) Beret
        Your choice: """)
        if (response.isnumeric() is False):
            print("\nPlease choose hat 1-5:")
            response = self.chooseHat()
        if (response.isnumeric() is True and int(response) < 1 or int(response) > 5):
            print("\nPlease choose hat 1-5:")
            response = self.chooseHat()
        return response


newHero = Hero()



print("\nChoose your first hat Hero!")
firstHat = newHero.hats[int(newHero.chooseHat())-1]
print(f"\nYou chose: {firstHat}\n")
index = newHero.hats.index(firstHat)
firstHatCloud = newHero.tehCloud[index]

print("Choose your second hat Hero!")
secondHat = newHero.hats[int(newHero.chooseHat())-1]
print(f"\nYou chose: {secondHat}")
index = newHero.hats.index(secondHat)
secondHatCloud = newHero.tehCloud[index]

print("\nNo sooner do you hand him the money and take the two hats,\nwhen the police bust into the store.\n")

response = newHero.hatOne()

if (response == "1"):
    newHero.carryHats(firstHat)
    newHero.carryHats(secondHat)
    newHero.cloudHats(firstHatCloud)
    newHero.cloudHats(secondHatCloud)
else: 
    newHero.carryHats(secondHat)
    newHero.carryHats(firstHat)
    newHero.cloudHats(secondHatCloud)
    newHero.cloudHats(firstHatCloud)

print(f"\nYou put on the {newHero.herosHats[0]} and pocket the {newHero.herosHats[1]}.\n")

running = True

while (running):

    if (len(newHero.cloudItems[0]) == 0 and len(newHero.cloudItems[1]) == 0):
        print("------------------------------------------------------------------------")
        print("Oh no!")
        print("Your current hat disappears and you have no more hats!")
        print("You try to run but the police tackle you and haul you away to jail.")
        print("Hope you have a good attorney!\n")
        break

    if (len(newHero.cloudItems[0]) == 0):
        newHero.cloudItems.append(newHero.cloudItems[0])
        newHero.herosHats.append(newHero.herosHats[0])
        del newHero.cloudItems[0]
        del newHero.herosHats[0]
        print("Your current hat disappears!")
        print(f"You put on your second hat and now wear your {newHero.herosHats[0]}!\n")

    item = newHero.reachInBag()
    choice = newHero.chooseAction()

    if (choice == "1"):
        newHero.eatItem(item) 
    else:
        newHero.useDistraction(item)

    if (newHero.health == 100):
        print("------------------------------------------------------------------------")
        print("You're now finally strong enough to get away!")
        print("You race out the side door and the cops are left in your dust!\n")
        running = False

    if (newHero.health == 0):
        print("------------------------------------------------------------------------")
        print("You're no longer strong enough to get away!")
        print("The police tackle you and haul you away to jail.")
        print("Hope you have a good attorney!\n")
        running = False