controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -200)
})
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
