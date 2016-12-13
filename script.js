var userMoney = 10;

var output = (document.getElementById('output'));
//var playButton = document.getElementById('playButton');
var ticketButton = document.getElementById('ticketButton');
var playerFunds = document.getElementById('playerFunds');

var lotterynumber = document.getElementById('lottery-number');
var yournumber = document.getElementById('your-number');

playerFunds.innerHTML = "&euro;" + userMoney;

function playHand() {
    if (userMoney == 0) {
        output.innerHTML = "<span class='error'>You are out of money!!</span>";
        return;
    }

   
    userMoney -= 1;
    playerFunds.innerHTML = "&euro;" + userMoney;
	
	var lotteryNumbers = lotteryNumber();
	
	var userNumbers = userNumber();
	
    compare(lotteryNumbers, userNumbers);
}

function lotteryNumber() {
  var lottery1 = Math.floor(Math.random()*20 + 1);
  var lottery2 = Math.floor(Math.random()*20 + 1);
   var lottery3 = Math.floor(Math.random()*20 + 1);
    var lottery4 = Math.floor(Math.random()*20 + 1);
  lotterynumber.innerHTML = lottery1 + ", " + lottery2 +" , " +lottery3+ " ," + lottery4;
  return [lottery1, lottery2 , lottery3, lottery4 ];
}

function userNumber() {
  var player1 = Math.floor(Math.random()*20 + 1); 
  var player2 = Math.floor(Math.random()*20 + 1); 
  var player3 = Math.floor(Math.random()*20 + 1); 
  var player4 = Math.floor(Math.random()*20 + 1); 
  yournumber.innerHTML = player1 + " ," +player2 + "," + player3 + " ," +player4;
  return [player1, player2, player3, player4];
}	
 

function compare(lottery, user) {
    var matchingNumbers = 0;
    for (var j = 0; j < user.length; j++) {
        for (var k = 0; k < lottery.length; k++) {
            if (user[j] == lottery[k]) {
                matchingNumbers++;
            }
        }
    }
    if (matchingNumbers == 0) {
        output.innerHTML = "<span class='win'>Sorry, you didn't win!!</span>";
    } else if ((matchingNumbers == 1)) {
        output.innerHTML = "<span class='win'>You won &euro;5!!</span>";
        userMoney += 5;
    } else if ((matchingNumbers == 2)) {
        output.innerHTML = "<span class='win'>You won &euro;10!!</span>";
        userMoney += 10;
    } else if ((matchingNumbers == 3)) {
        output.innerHTML = "<span class='win'>You won &euro;15!!</span>";
        userMoney += 15;
    } else {
        output.innerHTML = "<span class='win'>Yahoo!! You won &euro;40!!!</span>";
        userMoney += 40;
       // console.log(matchingNumbers);
    }
    return playerFunds.innerHTML = "&euro;" + userMoney;

}
ticketButton.onclick = playHand;
