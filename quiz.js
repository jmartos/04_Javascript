var user = {};
var responses = [];

function question1(){
  var name = prompt('What is your name?')
  user.name = name;
}


question1();

function question2() {
  var SecondQuestion = prompt('Does null = 0 ? (Yes or No)')

  if (SecondQuestion.toLowerCase() === 'yes') {
    SecondQuestion = true
  } else if (SecondQuestion.toLowerCase() === 'no') {
    SecondQuestion = false
  } else {
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(SecondQuestion); 
}

question2();


function question3() {
  var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  js = js.toLowerCase();
  switch (js) {
    case "java":
    case "javalive":
    case "scriptyscript":
    default:
      js = false;
      break;
  
    case "livescript":
      js = true;
      break;  
  }
  responses.push(js); 
}

question3();


function question4() {
  var capital = prompt('Which is the capital of France?')

  if (capital.toLowerCase() === 'paris') {
    capital = true
  } else {
    capital = false
    return question3();
  }
  responses.push(capital); 
}

question4();


function question5() {
  var js = prompt('Where is located the Big Ben: Berlin, New York, London, Moscow, Madrid?');
  js = js.toLowerCase();
  switch (js) {
    case "berlin":
    case "new york":
    case "moscow":
    case "madrid":
    default:
      js = false;
      break;
  
    case "london":
      js = true;
      break;  
  }
  responses.push(js); 
}

question5();



function evaluate(responsesArray) {
  var good_answer = 0; 
  var bad_answer = 0;
  for (index in responsesArray) {
    if (responsesArray[index] === true) {
      good_answer++;
    } else {
      bad_answer++;
    }
  }


  user.good = good_answer;
  user.bad = bad_answer;
  showResults();
  return
}


function showResults () {
  
  alert("Hello " +user.name+ "!, you have " +user.good+ " good answers and " + user.bad+ "bad answers");
}

evaluate (responses);


