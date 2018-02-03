// User will seek a treasure using text interface.
// User can move in different directions (“north”, “east”) by entering them in prompt. 
// This will move them around game play area until they find the hidden treasure.

/*
Suggested enhancements:

- Make the game play area larger
DONE, made size 3x3 instead of 2x2, easy to change

- Randomize the location of the treasure at the start of each game
DONE, and randomized user start location

- Add an audio element to the page, for ambiance

- Add traps to the game play area that can "kill" the contestant, forcing them to start over
DONE: added one chute-to-beginning

- Add interesting content to the page and style it

- Trigger the game to start on click of a button, instead of on page load

Also: added distance-to-treasure
*/

// Get user's name
var name = prompt("Welcome brave adventurer! What are you called?")

// Define the size of the gameplay area
var maxX = 3
var maxY = 3

// Random starting location of user
var userX = Math.floor(Math.random() * (maxX + 1))
var userY = Math.floor(Math.random() * (maxY + 1))
console.log("You are starting in sector (" + userX + ", " + userY + ")")

// store the initial location of the user, to jump there later
var userStartingX = userX
var userStartingY = userY

// Hide the treasure, with tentative x y values
var treasureX = Math.floor(Math.random() * (maxX + 1))
var treasureY = Math.floor(Math.random() * (maxY + 1))

// If treasure conflicts with user location, move the treasure
while (treasureX == userX && treasureY == userY){
  treasureX = Math.floor(Math.random() * (maxX + 1))
  treasureY = Math.floor(Math.random() * (maxY + 1))
}
// for testing only:
console.log("SECRET: Treasure is at (" + treasureX + ", " + treasureY + ")")

// place a chute-to-beginning at a tentative location
var chuteX = Math.floor(Math.random() * (maxX + 1))
var chuteY = Math.floor(Math.random() * (maxY + 1))

// If chute conflicts with user or treasure location, move the chute
while (
  (chuteX == userX && chuteY == userY) ||
  (chuteX == treasureX && chuteY == treasureY)){
  chuteX = Math.floor(Math.random() * (maxX + 1))
  chuteY = Math.floor(Math.random() * (maxY + 1))
}
// for testing only:
console.log("SECRET: Chute is at (" + chuteX + ", " + chuteY + ")")

// Flag that controls loop
var treasureFound = false

while(!treasureFound){
  var direction = prompt("Which direction do you want to move? (n, s, e, or w)")
  
  if (direction == "n" || direction == "north") {
    direction = "North"
  } else if (direction == "s" || direction == "south") {
    direction = "South"
  } else if (direction == "e" || direction == "east") {
    direction = "East"
  } else if (direction == "w" || direction == "west") {
    direction = "West"
  }
  
  // temp vars, only used for checking validity of new user location after move
  var newX
  var newY
  
  if (direction == "North"){
    newX = userX
    newY = userY + 1
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
      console.log("You are travelling North...")
      console.log("You have arrived in sector (" + userX + ", " + userY + ")")
      var distance = Math.round(Math.sqrt( 
        Math.pow((treasureX - userX), 2) + 
        Math.pow((treasureY - userY), 2) 
      ) * 10) / 10
      if (distance !== 0){
        console.log("You are " + distance + " sectors from the treasure")
      }
    } else {
      console.log("There is a forbidding mountain range; you cannot go North.")
      console.log("You are still in sector (" + userX + ", " + userY + ")")
    }
    
  } else if (direction == "South"){
    newX = userX
    newY = userY - 1
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
      console.log("You are travelling South...")
      console.log("You have arrived in sector (" + userX + ", " + userY + ")")
      var distance = Math.round(Math.sqrt( 
        Math.pow((treasureX - userX), 2) + 
        Math.pow((treasureY - userY), 2) 
      ) * 10) / 10
      if (distance !== 0){
        console.log("You are " + distance + " sectors from the treasure")
      }
    } else {
      console.log("There is a turbulent sea; you cannot go South")
      console.log("You are still in sector (" + userX + ", " + userY + ")")
    }

  } else if (direction == "East"){
    newX = userX + 1
    newY = userY
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
      console.log("You are travelling East...")
      console.log("You have arrived in sector (" + userX + ", " + userY + ")")
      var distance = Math.round(Math.sqrt( 
        Math.pow((treasureX - userX), 2) + 
        Math.pow((treasureY - userY), 2) 
      ) * 10) / 10
      if (distance !== 0){
        console.log("You are " + distance + " sectors from the treasure")
      }
    } else {
      console.log("There is an Orc settlement; you cannot go East")
      console.log("You are still in sector (" + userX + ", " + userY + ")")
    }
    
  } else if (direction == "West"){
    newX = userX - 1
    newY = userY
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
      console.log("You are travelling West...")
      console.log("You have arrived in sector (" + userX + ", " + userY + ")")
      var distance = Math.round(Math.sqrt( 
        Math.pow((treasureX - userX), 2) + 
        Math.pow((treasureY - userY), 2) 
      ) * 10) / 10
      if (distance !== 0){
        console.log("You are " + distance + " sectors from the treasure")
      }
    } else {
      console.log("There is a strange inferno; you cannot go West.")
      console.log("You are still in sector (" + userX + ", " + userY + ")")
    }
    
  } else {
    // requested direction isn't valid
    console.log("Please enter a real direction")
  }  
  
  // see if user location matches chute
  if (userX == chuteX && userY == chuteY){
    console.log("You fell into a chute and returned to (" + userStartingX + ", " + userStartingY + ")!")
    userX = userStartingX
    userY = userStartingY
  }

  // see if user location matches treasure
  if (userX == treasureX && userY == treasureY){
    console.log("You found the treasure, " + name + "!")  
    treasureFound = true
  }
}
