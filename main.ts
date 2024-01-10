// the first thing I do is look at the Big O notation in the google classroom
game.showLongText("This algorithm compares and adds a winning raffle based off of your input using any amount of numbers it needs from a list of twenty randomly generated values", DialogLayout.Bottom)
// add a list of 20 values, each being a random value of 1 - 999
let list = [
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999),
randint(1, 999)
]
game.splash("The list's values are:", list)
// ask the player for any random winning ticket number 
info.setScore(game.askForNumber("What raffle number won?", 3))
