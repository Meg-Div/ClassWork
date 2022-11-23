
red = [5,5,3,9,2]
blue = [3,6,7,2,1]
fastest = False

def bicycle(red, blue):
    total = 0
    red.sort(reverse=True)

    if (fastest):
        blue.sort()
        for i, person in enumerate(red):
            total += max(red[i],blue[i])

    else:
        blue.sort(reverse=True)
        for i, person in enumerate(red):
            total += max(red[i],blue[i])

    return total

print(bicycle(red, blue))