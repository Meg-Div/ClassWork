favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

# all restaurants that start with "U"
# get the last restaurant
# get the second to last retaurant
# uppercase all in list

for restraunt in favoriteRestaurants:
    print(restraunt.upper())

for restraunt in favoriteRestaurants:
    if (restraunt[0] == 'U'):
        print (restraunt.upper())

print(favoriteRestaurants[-1]) 
print(favoriteRestaurants[-2])


def name():
    return "Megan"

print(name())


favoriteRestaurants = ["Uchi","Town","IronAge KBBQ","Fadi"]

def printlist(list):
    for item in list:
        print(item)

printlist(favoriteRestaurants)



list = []

def fruit():
    list.append("Apple")

fruit()
print(list[0])