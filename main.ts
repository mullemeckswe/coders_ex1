/**
 * Vänta på knapptryck
 */
input.onButtonPressed(Button.A, function () {
    Run = 1
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    Run = 0
    basic.showIcon(IconNames.Sad)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
let Run = 0
basic.showIcon(IconNames.Yes)
Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
/**
 * Kör frammåt på vitt underlag och stannar vid svart streck
 */
basic.forever(function () {
    while (!(Run)) {
        basic.pause(100)
    }
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
    }
    if (Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 50)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
    }
})
