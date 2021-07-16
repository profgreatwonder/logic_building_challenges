# variables
num_1 = float(input("pick a number: "))
num_2 = float(input("pick another number: "))
num_3 = float(input("pick a third number: "))
avNum = (num_1 + num_2 + num_3)/3
print("The average of your chosen numbers is {}".format(avNum))


# functions
def num_av():
    num_1 = float(input("pick a number: "))
    num_2 = float(input("pick another number: "))
    num_3 = float(input("pick a third number: "))
    avNum = (num_1 + num_2 + num_3)/3
    return avNum

print("The average of your chosen numbers is {}".format(avNum))

def n_av(n_1, n_2, n_3):
    av_num = (n_1 + n_2 + n_3)/3
    return av_num

print(n_av(3, 3, 4))
