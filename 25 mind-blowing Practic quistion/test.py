import re 

text = "the rain in spain "

x = re.findall("ai",text)

print( "Counting word in :", text)


print(x.count("ai"), "ai is founded")