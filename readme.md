# piggame

Pig is a simple dice game which in its basic form is playable with just a single die. You win by being the first player to score 100 or more points.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```
#bdd
| Behavior                                                                             | input                                  | output                                            |
| -------------------------------------------------------------------------------------|:--------------------------------------:|--------------------------------------------------:|
| Player clicks ROLL button                                                            |Click ROLL button                       | Dice rolls and number is generated                |
|If Player rolls any number other than 1, that roll is added to the turnscore          |Roll = 2                                |turnscore = 2                                      |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends                 | Roll = 1                               |turn total = 2 / Total score = 2 / Player 2 begins |
|When a player's total score reaches 100 or more, game ends and winner page shows      |Player 1 total score = 100              |alert winner                                       |                 
##Technologies used
    javascript
    html
    jquery
    css


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)