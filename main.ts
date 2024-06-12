namespace SpriteKind {
    export const coin = SpriteKind.create()
}
function change_amount_of_coins_by (num: number) {
    amount_of_coins += num
}
function set_coin_count_to (num: number) {
    amount_of_coins = num
}
function Coin (X: number, Y: number) {
    sprites.destroy(coin1)
    coin1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 5 5 5 5 5 1 1 4 . . . . 
        . . 4 e 5 5 5 5 5 5 1 1 4 . . . 
        . 4 e e 5 5 5 4 5 5 5 1 1 4 . . 
        . 4 e e 5 5 5 4 5 5 5 5 1 4 . . 
        . 4 e e 5 5 5 4 5 5 5 5 5 4 . . 
        . 4 e e 5 5 5 4 5 5 5 5 5 4 . . 
        . 4 e e 5 5 5 4 5 5 5 5 5 4 . . 
        . 4 e e e 5 5 5 5 5 5 5 5 4 . . 
        . 4 e e e e 5 5 5 5 5 5 5 4 . . 
        . . 4 e e e e 5 5 5 5 5 4 . . . 
        . . . 4 e e e e 5 5 5 4 . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    coin1.setPosition(X - 10, Y)
    sprites.destroy(num_coin)
    if (amount_of_coins == 1) {
        num_coin = textsprite.create("1")
    } else if (amount_of_coins == 2) {
        num_coin = textsprite.create("2")
    }
    num_coin.setPosition(X, Y)
}
let num_coin: TextSprite = null
let coin1: Sprite = null
let amount_of_coins = 0
set_coin_count_to(0)
change_amount_of_coins_by(1)
Coin(50, 50)
