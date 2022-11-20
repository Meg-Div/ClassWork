import random

response = "Y"

while (response != "N"):
    print("Welcome to Team Allocator!")

    players = ["James", "Jake", "Jamie", "Josh", "Joanne", "Jill", "Jim", "Jet", "Joy", "Jessica", "Jasmine"]

    random.shuffle(players)

    teamOne = []
    teamTwo = []

    for i, player in enumerate(players):
        if (i % 2 != 0):
            teamOne.append(player)
        else:
            teamTwo.append(player)

    teamCaptainOne = teamOne[3]
    teamCaptainTwo = teamTwo[2]

    print("Team 1 Captain:", teamCaptainOne)
    print("Team 1:")

    for player in teamOne: 
        print("\t", player)

    print("Team 2 Captain:", teamCaptainTwo)
    print("Team 2:")

    for player in teamTwo: 
        print("\t", player)

    response = input("Pick teams again? Y/N ")
