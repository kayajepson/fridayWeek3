# _Beep Boop_

#### _Will  takes a number from a user and returns a range of numbers from 0 to the user inputted number with a few exceptions (see below). {04.05.19}_

#### By _**Kaya Jepson**_

## Description

_{Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."}_

## Setup/Installation Requirements

* _Clone project from GitHub https://github.com/kayajepson/fridayWeek3_
* _Open index.html_
* _Enter your number and enjoy!_

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program takes a number input from the user. | 6 | 6 |
| The program returns a range of numbers from 0 to the user inputted number. | 2 | "0, 1, 2" |
| The program replaces numbers that contain a 1: all digits are replaced (all digits) with "Beep!" | 1 | "beep" |
| The program replaces numbers that contain a 2: all digits are replaced (all digits) with "Boop!" | 2 | "beep", "boop" |
| The program replaces numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that." | 3 | "I'm sorry, Dave. I'm afraid I can't do that." |
| The program prioritizes 3's over 2's for these rules | 23 | "I'm sorry, Dave. I'm afraid I can't do that." |
| The program prioritizes 2's over 1's for these rules | 12 | "Boop." |
| The program reverses output when submitting with "reverse" button | 3 | "I'm sorry, Dave. I'm afraid I can't do that.", 2, 1, 0 |

## Known Bugs

_No known bugs as of last update_

## Support and contact details

_Please contact me at kayajepson(at)gmail(dot)com if you run into any issues or have questions, ideas or feedback._

## Technologies Used

_HTML, CSS, JS, Bootstrap, jQuery._

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019 **_Kaya Jepson_**
