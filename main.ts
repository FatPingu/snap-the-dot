function SnapStart () {
    sprite = game.createSprite(2, 2)
}
function SnapFrvr2 () {
    if (pins.analogReadPin(AnalogPin.P2) < 938) {
        if (sprite.get(LedSpriteProperty.X) == 2) {
            game.addScore(1)
        } else {
            game.gameOver()
        }
        basic.pause(500)
    }
}
function SnapFrvr1 () {
    sprite.ifOnEdgeBounce()
    sprite.move(1)
    basic.pause(150)
}
let sprite: game.LedSprite = null
SnapStart()
basic.forever(function () {
    SnapFrvr1()
})
basic.forever(function () {
    SnapFrvr2()
})
