input.onButtonPressed(Button.A, function () {
    Getal += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Getal)
})
input.onButtonPressed(Button.B, function () {
    Getal += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Lekker pouse hou")
})
let Getal = 0
Getal = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.SmallDiamond)
})
