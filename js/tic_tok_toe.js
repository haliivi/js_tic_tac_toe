// Variable discription section
var fieldArr = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var victoryArr = new Array(
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
);
var counterPlayer = 0;
var counterPC = 0;

// Main function
function analyzeClick(area) {

	if (counterPC == 3) {
		alert("PC - victory!!!");
	} else if (counterPlayer == 3) {
		alert("Player - victory!!!");
	}
	var insertIMG = document.getElementById(area.id);
	var i;
	i = insertIMG.id.slice(-1);
	if (insertValue(i, "")) {
		insertIMG.innerHTML= "<img src='img/cross.png' style='border-radius: 15px; width: 100px; height: 100px;' />";
		if (validateVictory(counterPlayer, "x") == true) {
			alert("Player win!");
			setTimeout(() => window.location.reload(), 1000);
			return;
		} else if (fieldArr.indexOf(0) == -1) {
			alert("Standoff!");
			setTimeout(() => window.location.reload(), 1000);
		}
		do {
			var randomNum;
			randomNum = Math.floor(Math.random()*8 + 1);
		} while (!insertValue("" ,randomNum));
		console.log(fieldArr.join("; "));
		insertIMG = document.getElementById("area_" + randomNum);
		insertIMG.innerHTML = "<img src='img/zero.png' style='border-radius: 15px; width: 100px; height: 100px;' />";
		if (validateVictory(counterPC, "o") == true) {
			alert("PC win!");
			setTimeout(() => window.location.reload(), 1000);
			return;
		}
	}
}

// Who winer or standoff
function validateVictory(counter, mark) {
	for (var i = 0; i < victoryArr.length; i++) {
		counter = 0;
		for (var j = 0; j < victoryArr[i].length; j++) {
			for (var i_1 = 0; i_1 < fieldArr.length; i_1++) {
				if (victoryArr[i][j] == i_1 + 1 && fieldArr[i_1] == mark) counter++;
				if (counter == 3) return true;
			}
		}
	}
}

// Inser "x" or "o" in array emulating playing field
function insertValue(cross, zero) {
	if (zero != "" && fieldArr[zero] == 0) {
		fieldArr[zero] = "o";
		return true;
	} else if (cross != "" && fieldArr[cross] == 0) {
		fieldArr[cross] = "x";
		return true;
	} else return false;
}
