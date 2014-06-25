spacegame
=========

HTML5 Multiplayer Game

This game is a multiplayer game which can be played on the browser. Two players can play this game. User can play game while he/she is offline. Host will execute the game loop and takes care of all the logical execution, server handles message passing between host and client. Client will only render the image i.e. will only show the object at it's side and will send keypresses.

Installation:

1. Install node.js  http://nodejs.org/download/
2. Create a new directory 
3. Then run command >npm install socket.io
4. After the installation create(copy) server.js file in the folder
5. Go in the recently created directory 
6. Start the server by command>node server.js

GamePlay:

1. Open the index.html and copy the ID
2. Open client.html paste the ID in the given box
3. Cascade the windows side by side
4. Use 'arrow keys' to move the Red ship and 'M' to fire
5. Use 'WASD' to move the Blue ship and 'Z' to fire


Game rules:

1. Survival of the fittest
1. Avoid asteroids
2. Power up by colliding with the powers
3. Shield - Ship won't destroy when collided with asteroid
4. Strike - Faster laser
5. Ship only use booster to move, to move ship in opposite direction user have to turn the ship (No brakes)
