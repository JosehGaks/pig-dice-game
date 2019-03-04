# PIG DICE GAME
#### This is a simple dice game that involves 2 players.
#### By **Joseph Gakunga**
## Description
Pig is a simple dice game which in its basic form is playable with just a single die. You win by being the first player to score 100 or more points.

## Installation
  ```cmd
  cd pig-dice
  cd index.html
  ```

## known Bugs
No known bugs for the moment.

## BDD
_____________________________________________________________________________________________________________________________________________________________________________________
| Behavior                                                                             | input                                  | output                                            |
|--------------------------------------------------------------------------------------|:--------------------------------------:|:-------------------------------------------------:|
| Player clicks ROLL button                                                            |Click ROLL button                       | Dice rolls and number is generated                |
|If Player rolls any number other than 1, that roll is added to the turnscore          |Roll = 2                                |turnscore = 2                                      |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends                 | Roll = 1                               |turn total = 2 / Total score = 2 / Player 2 begins |
|When a player's total score reaches 100 or more, game ends and winner page shows      |Player 1 total score = 100              |alert winner                                       |                |______________________________________________________________________________________|_________________________________________|__________________________________________________| 


## Technologies used
    javascript
    html
    jquery
    css
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT
Copyright (c) 2019 **Joseph**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


