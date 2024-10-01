music.play(music.stringPlayable("C D F D A G B E ", 120), music.PlaybackMode.LoopingInBackground)
basic.showString("Hello there :)!")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `)
}
