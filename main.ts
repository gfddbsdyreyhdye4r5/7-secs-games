let sprite = 0
let eresd = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    sprite = input.runningTime()
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    eresd = input.runningTime() - sprite
    basic.showIcon(IconNames.Chessboard)
    score = Math.abs(input.runningTime() - 7000)
    basic.showNumber(score / 1000)
})
basic.forever(function () {
	
})
