#see balance
#transfer balance
#see who can transfer to
#checking account inherits savings

class SavingsAccount:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

class CheckingAccount(SavingsAccount):
    pass

class Bank:
    def __init__(self):
        self.accounts = []
        
    def listAppend(self, user):
        self.accounts.append(user)

    def collectInterest(self, user):
        user.balance+= ((user.balance * .024 * 1)/12)
    
    def transferMoney(self, transferer, transferee, amount):
        if (self.accounts[self.accounts.index(transferer)].balance < amount):
            print(f"{self.accounts[self.accounts.index(transferer)].name} does not have enough money in their account.")
        else:
            self.accounts[self.accounts.index(transferer)].balance-= amount
            self.accounts[self.accounts.index(transferee)].balance+= amount

    def printlist(self):
        for i, person in enumerate(self.accounts):
            print(f"{i+1}) {person.name}: {person.balance}")

bank = Bank()
Meg = CheckingAccount("Meg", 1000)
Jayelon = CheckingAccount("Jayelon", 5000)
Family = SavingsAccount("Family", 100)

bank.listAppend(Meg)
bank.listAppend(Jayelon)
bank.listAppend(Family)

bank.printlist()

print("Transferring money...")
bank.transferMoney(Meg, Jayelon, 5000)
bank.printlist()

print("Your savings account has garnered interest...")
bank.collectInterest(Family)
bank.printlist()



