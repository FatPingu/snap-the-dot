let sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.ifOnEdgeBounce()
    sprite.move(1)
    basic.pause(150)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 938) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        basic.pause(500)
    }
})
