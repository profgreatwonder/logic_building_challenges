firstNum = input("please enter a number: ")
secondNum = input("please enter another number: ")
addNum = int(firstNum) + int(secondNum)
# addNum = int(firstNum + secondNum): this didn't work but it worked in JS
print(addNum)


def plusNum():
    initialNum = input("please enter a number: ")
    lastNum = input("please enter another number: ")
    return int(initialNum) + int(lastNum)

print(plusNum())
