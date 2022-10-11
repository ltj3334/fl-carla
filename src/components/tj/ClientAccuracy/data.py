f = open("./tmp.txt", 'r', encoding='UTF-8')
lines = f.readlines()
for line in lines:
    _tmp = line.split(" ")
    print(_tmp)
f.close()