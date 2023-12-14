def on_button_pressed_a():
    global Run
    Run = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Run
    Run = 0
    Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
input.on_button_pressed(Button.B, on_button_pressed_b)

Run = 0
Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)
"""

Vänta på knapptryck

"""
"""

Kör frammåt på vitt underlag och stannar vid svart streck

"""

def on_forever():
    if Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.WHITE) or Tinybit.Line_Sensor(Tinybit.enPos.LEFT_STATE, Tinybit.enLineState.WHITE):
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
