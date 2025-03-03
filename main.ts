input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        score += 1
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let score = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.addLife(1)
basic.forever(function () {
    if (score == 0) {
        basic.showString("LEVEL 1")
        score = 1
    }
    sprite.move(1)
    basic.pause(130)
    sprite.ifOnEdgeBounce()
    if (score == 6) {
        basic.showString("LEVEL 2")
        score = 7
        game.addLife(1)
        sprite.move(1)
        basic.pause(100)
        sprite.ifOnEdgeBounce()
    }
    if (score > 6 && score < 11) {
        sprite.move(1)
        basic.pause(100)
        sprite.ifOnEdgeBounce()
    }
    if (score == 11) {
        basic.showString("LEVEL 3")
        score = 12
        game.addLife(1)
        sprite.move(1)
        basic.pause(90)
        sprite.ifOnEdgeBounce()
    }
    if (score > 11 && score < 16) {
        sprite.move(1)
        basic.pause(90)
        sprite.ifOnEdgeBounce()
    }
    if (score == 16) {
        basic.showString("LEVEL 4")
        score = 17
        game.addLife(1)
        sprite.move(1)
        basic.pause(85)
        sprite.ifOnEdgeBounce()
    }
    if (score > 16 && score < 21) {
        sprite.move(1)
        basic.pause(85)
        sprite.ifOnEdgeBounce()
    }
})
