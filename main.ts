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
    Reset = 0
})
let Reset = 0
let Getal = 0
Getal = 0
