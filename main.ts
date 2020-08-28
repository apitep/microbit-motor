IrRemote.onPressEvent(RemoteButton.NUM9, function () {
    basic.showString("9")
})
// remote control: VGA
// tourne droite
IrRemote.onPressEvent(RemoteButton.NUM0, function () {
    magicbit.GeekServo(magicbit.Servos.S1, avant)
    magicbit.GeekServo(magicbit.Servos.S2, avant)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
IrRemote.onPressEvent(RemoteButton.NUM7, function () {
    basic.showString("7")
})
IrRemote.onPressEvent(RemoteButton.NUM8, function () {
    basic.showString("8")
})
// remote control: up
IrRemote.onPressEvent(RemoteButton.EQ, function () {
    magicbit.GeekServo(magicbit.Servos.S1, arriere)
    magicbit.GeekServo(magicbit.Servos.S2, avant)
    magicbit.GeekServo(magicbit.Servos.S3, avant)
    magicbit.GeekServo(magicbit.Servos.S4, arriere)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
IrRemote.onPressEvent(RemoteButton.NUM3, function () {
    basic.showString("3")
})
// remote control: list
// stop
IrRemote.onPressEvent(RemoteButton.NUM1, function () {
    magicbit.GeekServo(magicbit.Servos.S1, stop)
    magicbit.GeekServo(magicbit.Servos.S2, stop)
    magicbit.GeekServo(magicbit.Servos.S3, stop)
    magicbit.GeekServo(magicbit.Servos.S4, stop)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
})
IrRemote.onPressEvent(RemoteButton.A, function () {
    magicbit.Servo(magicbit.Servos.S7, 30)
    magicbit.Servo(magicbit.Servos.S8, 30)
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
})
IrRemote.onPressEvent(RemoteButton.NUM6, function () {
    basic.showString("6")
})
IrRemote.onPressEvent(RemoteButton.NUM5, function () {
    basic.showString("5")
})
// remote control: HDMI
// tourne gauche
IrRemote.onPressEvent(RemoteButton.NUM2, function () {
    magicbit.GeekServo(magicbit.Servos.S1, arriere)
    magicbit.GeekServo(magicbit.Servos.S2, arriere)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
// tourne droite
IrRemote.onPressEvent(RemoteButton.Left, function () {
	
})
IrRemote.onPressEvent(RemoteButton.B, function () {
    magicbit.Servo(magicbit.Servos.S7, 180)
    magicbit.Servo(magicbit.Servos.S8, 180)
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
})
IrRemote.onPressEvent(RemoteButton.NUM4, function () {
    magicbit.GeekServo(magicbit.Servos.S1, avant)
    magicbit.GeekServo(magicbit.Servos.S2, arriere)
    magicbit.GeekServo(magicbit.Servos.S3, arriere)
    magicbit.GeekServo(magicbit.Servos.S4, avant)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
// tourne gauche
IrRemote.onPressEvent(RemoteButton.Down, function () {
	
})
IrRemote.onPressEvent(RemoteButton.Add, function () {
    basic.showString("+")
})
// remote control: list
IrRemote.onPressEvent(RemoteButton.C, function () {
	
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
