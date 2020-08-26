magicbit.MotorStopAll()
basic.showString("NILS")
let servo1 = 0
let servo2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        magicbit.MotorStopAll()
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        magicbit.MotorStopAll()
        magicbit.GeekServo(magicbit.Servos.S1, servo1 + 10)
        magicbit.GeekServo(magicbit.Servos.S2, servo2 + 10)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        magicbit.MotorStopAll()
        magicbit.GeekServo(magicbit.Servos.S7, 180)
        magicbit.GeekServo(magicbit.Servos.S8, 32)
    }
})
