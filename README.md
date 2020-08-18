# Inertia Override
This is my Interactive Milestone Project for the Code Institute. Essentially I set out to create a retro styled 2D Space Invaders/Galaga-esque space shooter game, that I would enjoy playing myself. The idea would be to have simple and easy to understand controls, that anyone can pick up and play with. Anmd the Title "Inertia Override" being in reference to being fast paced movement, and the concenpt of controlling that inertia in the movement of a real life space-craft.

## UX
As games can be addictive, I wanted to use darker colours which would be easier on the users eyes, particularly if the user were to spend and extended period of time playing the game. This was achieved using mostly muted colours in the body of the HTML page and more vibrant contrasting colours represently the player ships lasers, and enemies on screen, making them more easily indentifyable. In part I also wanted to experiement with a paralaxing background (continously scrolling), in order to achieve a sense of continuous space flight when the players ship is otherwise in a stationary position (so as to enhance or otherwise not ruin the fantasy). I thought this would also make a very good backdrop for the initial point of contact the user has when loading the page.

## Features

### Existing Features
* A 800 by 600 window in which the user can play the game
* Parralax, scrolling, Space themed background (Gives a sense of continuous motion)
* A Title screen the user has as their first point of contact (includes instruction on how to start the game)
* Score Counter (for the user to get a feel of how well they are doing in the game)
* Keyboard controls (for the user to control the player ships direction and fire lasers)
* A continuous barrage of asteroids to avoid
* Waves of enemies for the player to avoid and destroy for point (to be added to the score counter)

### Features left to implement
* More diverse waves of enemies, that move in interesting patterns.
* Varied and interesting Boss encounters.
* Multiple Sprites for a more varied enemy to fight.
* More diverse ways of spawning asteroids.
* More diverse backgrounds, to enhance a sense of progression.
* Powerups: such as bonus points. Variation in lasers for the player to use. Extra Lives.
* A HUD element in the game window so the player can keep track of their extra lives.

## Technologies Used
* Visual Studio Code (My IDE of choice)
* Live Server (Visual Studio Extension, to disable CORS error and load local files)
* Github Repositories (To host and store the code)
* Github Pages (To deploy the code for others users including examiners to to be able to access)
* PIXI.js (JS Framework for rendering graphics in Canvas or WebGL)
* Krita (Free image editing software, to make a few aesthetic changes to the graphics)

## Testing
1. Start the Game
   1. Once the page is loaded you should see the 800x 600px ratio game window
   1. Follow the instruction "Press ENTER to start, and the title text should dissapear
   1. You should now see game objects being rendered, such as the players ship in the center at the bottom of the screen
1. Increase the score
   1. Start the game following the instruction above labelled "Start the Game"
   1. In the top left corner of the screen you should see "score: 0"
   1. Once you see the orangey red enemies ship appear on screen, try shooting them, by using the arrow keys on your keyboard to move the player ship ship, and spacebar on the keyboard to fire your ships lasers.
   1. You should now see the numerical values next to the text "score:" increase in value

## Deployment
The deployed version of my Game can be found here: https://phillpearsondev.github.io/interactive-milestone-project/

## Credits

### Media
* The Image for The Player Ship was taken from: https://images.app.goo.gl/2epjPE53tJLtRSjbA and scaled down.
* The Image for the Enemy ships was taken from: https://images.app.goo.gl/j4GczQQ9MjZ28ZuDA and scaled down.
* The Image for the Asteroids was taken from: https://images.app.goo.gl/LduuysUH8tkhMF8a7 and scaled down.
* The Images used in both the Players and Enemy lasers were taken from: https://images.app.goo.gl/ndYYXsgZ9rNRydep8 and scaled down and colorized.

### Acknowledgements
* I received inspiration via PIXI.js tutorials from the Youtuber Dower Chin
* I received inspiration from the 1978 Space Invaders Game. An example of which can be found here: http://www.civrays.com/invaders.html
