var arr = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var victoryArr = new Array([1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]);

function insertAreaClick(area) {
	
	var counterPC = 0;
	var counterPlayer = 0;


	for (var i = 0; i < victoryArr.length; i++) {
		for (var ii = 0; ii < victoryArr[i].length; ii++) {
			counterPC = 0;
			counterPlayer = 0;
			for (var iii = 0; iii < arr.length; iii++) {
				if (iii + 1 == victoryArr[i][ii] && arr[iii] == "x") {
					counterPlayer++;
				} else if (iii + 1 == victoryArr[i][ii] && arr[iii] == "o") {
					counterPC++;
				}
			}
		}
	}
	
	if (counterPC == 3) {
		alert("PC - victory!!!");
	} else if (counterPlayer == 3) {
		alert("Player - victory!!!");
	}
	var insertIMG = document.getElementById(area.id);
	var i;
	i = insertIMG.id.slice(-1);
	if (insertValue(i)) {
		insertIMG.innerHTML = "<img src='img/cross.png' style='border-radius: 15px; width: 100px; height: 100px;' />";
		console.log(arr.join("; "));
		do {
			var randomNum;
			randomNum = Math.floor(Math.random()*8 + 1);
		} while (!insertValue1(randomNum));
		console.log(arr.join("; "));
		insertIMG = document.getElementById("area_" + randomNum);
		insertIMG.innerHTML = "<img src='img/zero.png' style='border-radius: 15px; width: 100px; height: 100px;' />";
	}
}
function insertValue(i) {
	if (arr[i] == 0) {
		arr[i] = "x";
		return true;
	} else return false;
}
function insertValue1(i) {
	if (arr[i] == 0) {
		arr[i] = "o";
		return true;
	} else return false;
}