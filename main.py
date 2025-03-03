def on_button_pressed_a():
    global score
    if sprite.get(LedSpriteProperty.X) == 2:
        score += 1
        game.add_score(1)
    else:
        game.remove_life(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

score = 0
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
game.add_life(1)

def on_forever():
    global score
    if score == 0:
        basic.show_string("LEVEL 1")
        score = 1
    sprite.move(1)
    basic.pause(130)
    sprite.if_on_edge_bounce()
    if score == 6:
        basic.show_string("LEVEL 2")
        score = 7
        game.add_life(1)
        sprite.move(1)
        basic.pause(100)
        sprite.if_on_edge_bounce()
    if score > 6 and score < 11:
        sprite.move(1)
        basic.pause(100)
        sprite.if_on_edge_bounce()
    if score == 11:
        basic.show_string("LEVEL 3")
        score = 12
        game.add_life(1)
        sprite.move(1)
        basic.pause(90)
        sprite.if_on_edge_bounce()
    if score > 11 and score < 16:
        sprite.move(1)
        basic.pause(90)
        sprite.if_on_edge_bounce()
    if score == 16:
        basic.show_string("LEVEL 4")
        score = 17
        game.add_life(1)
        sprite.move(1)
        basic.pause(85)
        sprite.if_on_edge_bounce()
    if score > 16 and score < 21:
        sprite.move(1)
        basic.pause(85)
        sprite.if_on_edge_bounce()
basic.forever(on_forever)
