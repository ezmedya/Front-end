from turtle import *
tracer(10)

bgcolor('black')
speed(0)
hideturtle()

for i in range(200):
    color('red')
    circle(i)
    color('orange')
    circle(i*0.8)
    color('yellow')
    circle(i*0.6)
    color('green')
    circle(i*0.4)
    right(60)
    forward(3)
done