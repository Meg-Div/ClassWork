#good guy
#bad guy

#loop until victor is chosen

#Choose your hero

#Felix the cat, hat chosen can produce different tools
import random

class Hero:
    def __init__(self):
        self.hats = ["Stetson", "Fedora", "Top hat", "Baseball hat", "Beret"]
        self.stetson = ["rope", "horse", "hay", "spur", "cow"]
        self.fedora = ["cigar", "lighter", "bottle of bourbon", "glass of whiskey", "piano"]
        self.tophat = ["rabbit", "white glove", "pocket watch", "cane", "necklace"]
        self.baseball = ["stick of gum", "baseball bat", "baseball", "hotdog", "peanut"]
        self.beret = ["baguette", "square of cheese", "bottle of wine", "vespa", "mouse"]
        self.tehCloud = [self.stetson,self.fedora, self.tophat, self.baseball, self.beret]
        self.eat = [0, 10, 20, 30, 40, 50, 60, 70]
        self.winLose = ["increased", "decreased"]
        self.fight = ["the police do not seem impacted", "the police look scared", "the police look terrified", "the police look shocked"]
        self.herosHats = []
        self.cloudItems = []
        self.health = 40
        self.actions = ["eat it to attempt to increase your health", "use it to attempt to get away from the police"]
    def chooseAction(self):
        return input("""Would you like to:
1) Eat it to attempt to increase your health
2) Use it to attempt to get away from the police
""")
    def healthChange(self):
        random.shuffle(self.winLose)
        return self.winLose[0]
    def cloudHats(self, hat):
        self.cloudItems.append(hat)
    def carryHats(self, hat):
        self.herosHats.append(hat)
    def useItem(self):
        random.shuffle(self.fight)
        return self.fight[0]
    def eatItem(self):
        change = self.healthChange()
        random.shuffle(self.eat)
        if (change == "increased"):
            self.health = 100 if (self.health + self.eat[0] > 100) else (self.health + self.eat[0])
        else:
            self.health = 0 if (self.health - self.eat[0] < 0) else (self.health - self.eat[0])
        return self.health
    def reachInBag(self):
        random.shuffle(self.cloudItems[0])
        random.shuffle(self.cloudItems[1])
        item = self.cloudItems[0][0]
        print(f"""Pulling off the {self.herosHats[0]} you reach inside and pull out a ...

{item}!
""")
        del self.cloudItems[0][0]
        return item
    def chooseHat(self):
        response = input("""
        1) Stetson
        2) Fedora
        3) Top hat
        4) Baseball
        5) Beret
        """)
        return response

newHero = Hero()
print(f"""
You are being chased by the police for a crime you didn't commit and you duck into a store to hide.
You've been running so long your health is at:
{newHero.health} / 100
The shopkeep sees you attempting to hide and offers to sell you a magic hat.
You are exhuasted and doubtfully stare at him as he puts a hat on,
only to take it off and pull something out of it.
"How much?" You ask and he quotes a resonable amount so you buy two.
He tells you you can only wear one at a time,
and the first will disappear once you put the second hat on. 
""")
print("Choose your first hat Hero!")
firstHat = newHero.hats[int(newHero.chooseHat())-1]
print("You chose:", firstHat)
index = newHero.hats.index(firstHat)
firstHatCloud = newHero.tehCloud[index]

print("Choose your second hat Hero!")
secondHat = newHero.hats[int(newHero.chooseHat())-1]
print("You chose:", secondHat)
index = newHero.hats.index(secondHat)
secondHatCloud = newHero.tehCloud[index]

print(f"""
No sooner do you hand him the money and take the two hats,
when the police bust into the store.
Which hat do you put on first?
1) {firstHat}
2) {secondHat}
""")
response = input("Your choice: ")
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

print(f"You put on the {newHero.herosHats[0]} and pocket the {newHero.herosHats[1]}.")

running = True

while (running):
    if (len(newHero.cloudItems[0]) == 0):
        print("""
        Your current hat disappears! You need to put on your second hat!
        """)
        del newHero.cloudItems[0]
    item = newHero.reachInBag()
    number = newHero.chooseAction()
    response = newHero.useItem()
    if (number == "1"):
        change = newHero.eatItem()
        print(f"You eat the {item} and your health is now at: {newHero.health} / 100.")
        print("You put your hat back on.")
 
    else:
        print(f"You use your {item} as a distraction and {response}.")
        if (response == newHero.fight[0]):
            print("You lose some of your confidence and your health.")
            newHero.health-=20
        if (response == newHero.fight[1]):
            print("It boosts your confidence and your health enough to try again!")
            newHero.health+=10
        if (response == newHero.fight[2]):
            print("It boosts your confidence and your health enough to try again!")
            newHero.health+=20
            print(newHero.health)
        if (response == newHero.fight[3]):
            print("But you lose some of your confidence and your health.")
            newHero.health-=10
        print(f"Your health is now at: {newHero.health} / 100")
        print("You put your hat back on.")

    if (newHero.health == 100):
        print("""You're finally strong enough to get away!
You race out the side door and the cops are left in your dust!""")
        running = False
    if (newHero.health == 0):
        print("""You're no longer strong enough to get away!
The police tackle you and haul you away to jail!
Hope you have a good attorney!""")
        running = False


