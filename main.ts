IrRemote.onPressEvent(RemoteButton.NUM9, function () {
    basic.showString("9")
})
IrRemote.onPressEvent(RemoteButton.NUM0, function () {
    basic.showString("0")
})
IrRemote.onPressEvent(RemoteButton.NUM7, function () {
    basic.showString("7")
})
IrRemote.onPressEvent(RemoteButton.NUM8, function () {
    basic.showString("8")
})
IrRemote.onPressEvent(RemoteButton.EQ, function () {
    basic.showString("-")
})
IrRemote.onPressEvent(RemoteButton.NUM3, function () {
    basic.showString("3")
})
IrRemote.onPressEvent(RemoteButton.NUM1, function () {
    basic.showString("1")
})
IrRemote.onPressEvent(RemoteButton.A, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        . . . . .
        . . . . .
        `)
    magicbit.Servo(magicbit.Servos.S7, 0)
    magicbit.Servo(magicbit.Servos.S8, 0)
})
IrRemote.onPressEvent(RemoteButton.NUM6, function () {
    basic.showString("6")
})
IrRemote.onPressEvent(RemoteButton.NUM5, function () {
    basic.showString("5")
})
IrRemote.onPressEvent(RemoteButton.NUM2, function () {
    basic.showString("2")
})
IrRemote.onPressEvent(RemoteButton.Left, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    magicbit.GeekServo(magicbit.Servos.S1, avant)
    magicbit.GeekServo(magicbit.Servos.S2, avant)
})
IrRemote.onPressEvent(RemoteButton.B, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # # # # #
        . # . # .
        . # . # .
        `)
    magicbit.Servo(magicbit.Servos.S7, 180)
    magicbit.Servo(magicbit.Servos.S8, 180)
})
IrRemote.onPressEvent(RemoteButton.NUM4, function () {
    basic.showString("4")
})
IrRemote.onPressEvent(RemoteButton.Down, function () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    magicbit.GeekServo(magicbit.Servos.S1, arriere)
    magicbit.GeekServo(magicbit.Servos.S2, arriere)
})
IrRemote.onPressEvent(RemoteButton.Add, function () {
    basic.showString("+")
})
IrRemote.onPressEvent(RemoteButton.C, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    magicbit.GeekServo(magicbit.Servos.S1, stop)
    magicbit.GeekServo(magicbit.Servos.S2, stop)
})
let stop = 0
let arriere = 0
let avant = 0
basic.showLeds(`
    # . . . #
    . # # # .
    # . # . #
    # . # . #
    . # # # .
    `)
basic.showString("NILS")
IrRemote.init(Pins.P1)
avant = 180
arriere = 0
stop = 90
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
        magicbit.MotorStopAll()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        magicbit.GeekServo(magicbit.Servos.S1, 180)
        magicbit.GeekServo(magicbit.Servos.S2, 90)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        magicbit.GeekServo(magicbit.Servos.S1, 0)
        magicbit.GeekServo(magicbit.Servos.S2, 0)
    }
})
