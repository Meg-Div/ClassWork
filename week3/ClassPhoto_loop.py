
red = [6,9,2,4,5,1]
blue = [5,8,1,3,4,9]


def photos(red, blue):
    blue.sort()
    red.sort()
    
    if (red[-1] > blue[-1]):
        largest = red
        smallest = blue
    else: 
        largest = blue
        smallest = red

    for i, num in enumerate(largest):
        if (largest[i] <= smallest[i]):
            return False
    
    return True

photos(red, blue)