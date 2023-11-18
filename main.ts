/**
 * Kör frammåt på vitt underlag och stannar vid svart streck
 */
input.onButtonPressed(Button.A, function () {
    Run = 1
})
input.onButtonPressed(Button.B, function () {
    Run = 0
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
let Run = 0
Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
/**
 * Vänta på knapptryck
 */
basic.forever(function () {
    while (!(Run)) {
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Happy)
    if (Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 30)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
