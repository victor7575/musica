input.onButtonPressed(Button.A, function () {
    music.setTempo(263)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            for (let index = 0; index < 2; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            for (let index = 0; index < 2; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(932, music.beat(BeatFraction.Whole))
    music.playMelody("C C5 E F C D B C ", 120)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A C5 G B A E C5 ", 120)
    music.playMelody("A G A B F C5 E A ", 120)
    music.playMelody("C5 E G A F B D C5 ", 120)
    music.playMelody("D F - C G F E B ", 120)
    music.playMelody("C C C - - - - - ", 120)
})
basic.forever(function () {
	
})
