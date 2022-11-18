#Write code to do the following:
#Print Elizabeth's phone number.
#Add an entry to the dictionary: Kareem's number is 938-489-1234.
#Delete Alice's phone entry.
#Change Bob's phone number to '968-345-2345'.
#Print all the phone entries.
#In this exercise, are you using dynamic keys or fixed keys?

phonebook_dict = { 'Alice': '703-493-1834', 'Bob': '857-384-1234', 'Elizabeth': '484-584-2923' }

#Print Elizabeth's phone number.
print(phonebook_dict["Elizabeth"])

#Add an entry to the dictionary: Kareem's number is 938-489-1234.
phonebook_dict["Kareem"] = "938-489-1234"

#Delete Alice's phone entry.
del phonebook_dict["Alice"]

#Change Bob's phone number to '968-345-2345'.
phonebook_dict["Bob"] = "968-345-2345"

#Print all the phone entries.
for name, number in phonebook_dict.items():
    print(number)

#In this exercise, are you using dynamic keys or fixed keys?
#dynamic keys because we're adding more of them


ramit = { 'name': 'Ramit', 'email': 'ramit@gmail.com', 'interests': 
    ['movies', 'tennis'], 'friends': 
    [ 
        { 'name': 'Jasmine', 'email': 'jasmine@yahoo.com', 'interests': 
        ['photography', 'tennis'] 
        }, 
        { 'name': 'Jan', 'email': 'jan@hotmail.com', 'interests': 
        ['movies', 'tv']
         } 
         ] 
         }

#Write a python expression that gets the email address of Ramit.
#Write a python expression that gets the first of Ramit's interests.
#Write a python expression that gets the email address of Jasmine.
#Write a python expression that gets the second of Jan's two interests.
#In this exercise, are you using dynamic keys or fixed keys?

def aboutRamit():
    #Write a python expression that gets the email address of Ramit.
    print(ramit["email"])
    #Write a python expression that gets the first of Ramit's interests.
    print(ramit["interests"][0])
    #Write a python expression that gets the email address of Jasmine.
    print(ramit["friends"][0]["email"])
    #Write a python expression that gets the second of Jan's two interests.
    print(ramit["friends"][1]["interests"][1])

aboutRamit()
#fixed keys because nothing changes?