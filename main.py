degree = 0

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global degree
    degree = input.acceleration(Dimension.X)
basic.forever(on_forever)
