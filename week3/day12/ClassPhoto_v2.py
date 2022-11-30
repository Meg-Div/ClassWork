red = [6,9,2,4,5,1]
blue = [5,8,1,3,4,9]

def photos(red, blue):
    blue.sort()
    red.sort()

    if (red[-1] > blue[-1]):
        for i, num in enumerate(red):
            if (red[i] <= blue[i]):
                return False
    else:
        for i, num in enumerate(red):
            if (blue[i] <= red[i]):
                return False
    
    return True