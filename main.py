def on_button_pressed_a():
    global Run
    Run = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

Run = 0
Tinybit.car_ctrl(Tinybit.CarState.CAR_STOP)

def on_forever():
    control.wait_for_event(Run, 1)
    serial.write_line("test")
    basic.show_icon(IconNames.HEART)
    if Tinybit.Line_Sensor(Tinybit.enPos.RIGHT_STATE, Tinybit.enLineState.WHITE):
        serial.write_line("left black")
    serial.write_number(Tinybit.Ultrasonic_Car())
basic.forever(on_forever)
