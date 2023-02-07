# python index.py
###Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line.

#input: array [1,2,-1,-2,0]
#output: decimal value three times (print)

###either need to use a for loop to iterate or a function. I'm going to use filter to remove any pos, neg, or zero from the array.

#to get a decimal I will divide it by the length of the total elements in the array

def decimals(arr):
    length = len(arr)
    print(len(list(filter(lambda a: a < 0, arr)))/length)
    print(len(list(filter(lambda a: a > 0, arr))))
    print(len(list(filter(lambda a: a == 0, arr))))

decimals([1,1,0,-1,-1])

