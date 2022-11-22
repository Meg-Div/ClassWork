#see balance
#transfer balance
#see who can transfer to

class BankAccount:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

class Bank:
    def __init__(self):
        self.list = []
        
    def listAppend(self, user):
        self.list.append(user)
    
    def transferMoney(self, transferer, transferee, amount):
        for person in self.list:
            if (person == transferer):
                if (person.balance >= amount):
                    person.balance -= amount
                    for person in self.list:
                        if (person == transferee):
                            person.balance += amount
                else:
                    print(f"{person.name} does not have enough money in their account.")


    def printlist(self):
        count = 1
        for person in self.list:
            print(f"{count}) {person.name}: {person.balance}") 
            count+=1

bank = Bank()

Meg = BankAccount("Meg", 1000)
Jayelon = BankAccount("Jayelon", 5000)

bank.listAppend(Meg)
bank.listAppend(Jayelon)

bank.printlist()

bank.transferMoney(Meg, Jayelon, 5000)

bank.printlist()



