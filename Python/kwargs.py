def myKwargs(**kwargs):
    print("Kwargs is ", type(kwargs))
    print(kwargs)
    #print("b is",kwargs["b"])


#Scenario a=23,b=30 =? {a:23,b:30}
myKwargs(a=23,b=30)

#scenario bno 3
#name="Samson" email="samson@gmail.com"
#myKwargs({"name":"Samson"})
myKwargs(name="Samson",email="Sam@sam.com",dict={"a":"a"})
def area_rectangle(lenght,width):
    area=length*width
    print(f"For rectangle with length {length} and width {width} are is {area}")

#option 1 you call it directly with args.
area_rectangle(5,2) #args
width=4
length=39
area_rectangle(width,length) #args
area_rectangle(width=width,length=length) #Now using kwargs
#Option 3 you with kwargs
area_rectangle(width=10,length=55)
#You have to match the parameter names with arguments
area_rectangle(width=10,length=55)
# area_rectangle(40)
