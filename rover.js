var myRover = {
  position: [0,0], 
  direction: 'N'
};

var mySecondRover = {
  position: [1,0],
  direction: 'N'
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };

  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnRight(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'E'
      break;
    case 'E': rover.direction = 'S'
      break;
    case 'S': rover.direction = 'W'
      break;
    case 'W': rover.direction = 'N'
      break; 
  };

  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


  function turnLeft(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'W'
      break;
    case 'E':  rover.direction = 'N'
      break;
    case 'S': rover.direction = 'E'
      break;
    case 'W': rover.direction = 'S'
      break;
  };

  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}



function roverMove (rover) {
  for (i in command){
    switch (command[i]){
      case 'f': goForward(rover);
        break
      case 'b': goBack(rover);
        break
      case 'r': turnRight(rover);
        break
      case 'l': turnLeft(rover);
        break
    }
  }
    
   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


command = "fffrfflfffbb"
roverMove(myRover)
roverMove(mySecondRover)
