controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . 4 4 4 4 4 4 4 4 . . . . . . 
    . . 4 4 1 4 4 4 1 4 4 . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . . 4 4 1 4 4 4 1 4 4 . . . . . 
    . . 4 4 4 1 1 1 4 4 4 . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 500
forever(function () {
    pause(2000)
    projectile = sprites.createProjectileFromSide(img`
        . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 f f f f f f f f f 1 1 1 . . 
        1 1 f f f f f f f f f f f 1 1 . 
        1 f f f f f f f f f 1 f f f 1 1 
        1 f f f f f f f f f f f f f f 1 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        1 f f f f f f f f f f f f f f f 
        1 f f f f f 1 f f f f f f f f f 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 f f f f f f f f f f f 1 1 
        . . 1 1 f f f f f f f f f 1 1 . 
        . . . 1 1 1 f f f f f f f 1 . . 
        . . . . . 1 1 1 f f f 1 1 1 . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        `, -50, 0)
    projectile.bottom = randint(-120, 100)
})
