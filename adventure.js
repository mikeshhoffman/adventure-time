// User will seek a treasure using text interface.  prompt box
// User can move in different directions (“north”, “east”) by entering them in prompt. 
// This will move them around game play area until they find the hidden treasure.

// Define the size of the gameplay area
var maxX = 2
var maxY = 2

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Flag that controls loop
var treasureFound = false

// Get user's name
//var name = prompt("Welcome brave adventurer! What are you called?")


while(!treasureFound){
  var direction = prompt("Which direction do you want to move? (north, south, east, west)")
  console.log(direction)
  
  // see what new user location should be
  // check if new user location is valid
  // check if new user location is treasure
  
  // temp vars, only used for checking validity of new user location after move
  var newX
  var newY
  
  if (direction == "north"){
    newX = userX
    newY = userY + 1
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction, you cannot go.")
    }
    
  } else if (direction == "east"){
    newX = userX + 1
    newY = userY
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction, you cannot go.")
    }
    
  } else if (direction == "south"){
    newX = userX
    newY = userY - 1
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction, you cannot go.")
    }
    
  } else if (direction == "west"){
    newX = userX - 1
    newY = userY
    // check that neither value < 0, neither is > max
    if ( newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY ){
      userX = newX
      userY = newY
    } else {
      console.log("There is a forbidding mountain range in that direction, you cannot go.")
    }
    
  } else {
    console.log("Please enter a real direction")
  }
  
  console.log("userX: " + userX + ", userY: " + userY)

  // see if user location matches treasure
  if (userX == treasureX && userY == treasureY){
    console.log("You found the treasure!")  
    treasureFound = true
  }
}
