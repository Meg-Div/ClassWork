dictionary = {}

def menu():
    response = input("Press 1 to add task\nPress 2 to delete task\nPress 3 to view all tasks\nPress q to quit\n")

    if (response == "1"):
        title = input("Add title: ")
        priority = input("Add priority, high, medium or low: ")
        dictionary[priority] = title
        print(dictionary[priority])
        menu()
            
    if (response == "2"):
        count = 1
        titles =[]
        for title, priority in dictionary.items():
            print(count, "-", title, "-", priority)
            titles.append(title)
            count+=1

        index = input("Enter number to remove: ")
        name = titles[int(index)-1]
        del dictionary[name]
        menu()
        
    if (response == "3"):
        print(dictionary)
        menu()

menu()