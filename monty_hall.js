//monty hall

var monty = function(SwitchDoor) {

	numberofWins = 0;

	var doors = [1, 2, 3];
	var random = function() {
	return doors[Math.floor(Math.random() * doors.length)] };

	for (i = 1; i <= 1000; i++) {
	  var prize = random();
	  var guess = random();

		if ((guess === prize && !SwitchDoor) || (guess !== prize && SwitchDoor)) {
			numberofWins++;
		}
	}
	return numberofWins;
}
	

console.log('The percentage of times you won without switching: ' + monty(false)/10);
console.log('The percentage of times you won with switching: ' + monty(true)/10);
