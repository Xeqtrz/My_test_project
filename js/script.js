function myFunc() {
	var button1 = document.getElementById( "button1" );
	var button2 = document.getElementById( "button2" );
	var button3 = document.getElementById( "button3" );
	var button4 = document.getElementById( "button4" );

	var button5 = document.getElementById( "button5" );
	var button6 = document.getElementById( "button6" );
	var button7 = document.getElementById( "button7" );
	var button8 = document.getElementById( "button8" );

	var button9 = document.getElementById( "button9" );
	var button0 = document.getElementById( "button0" );
	var buttonAdd = document.getElementById( "buttonAdd" );
	var buttonSub = document.getElementById( "buttonSub" );

	var buttonMul = document.getElementById( "buttonMul" );
	var buttonDiv = document.getElementById( "buttonDiv" );
	var buttonDot = document.getElementById( "buttonDot" );
	var buttonEq = document.getElementById( "buttonEq" );
	var buttonRes = document.getElementById( "buttonRes" );

	var field = document.getElementById( "field" );

	var calculateNumber;

	var buttonValues = new Array( "7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", ".", "=", "+");

	button1.onclick = function () {
		field.innerHTML += "1";
	}

	button2.onclick = function () {
		field.innerHTML += "2";
	}

	button3.onclick = function () {
		field.innerHTML += "3";
	}

	button4.onclick = function () {
		field.innerHTML += "4";
	}

	button5.onclick = function () {
		field.innerHTML += "5";
	}

	button6.onclick = function () {
		field.innerHTML += "6";
	}

	button7.onclick = function () {
		field.innerHTML += "7";
	}

	button8.onclick = function () {
		field.innerHTML += "8";
	}

	button9.onclick = function () {
		field.innerHTML += "9";
	}

	button0.onclick = function () {
		field.innerHTML += "0";
	}

	buttonDot.onclick = function () {
		field.innerHTML += ".";
	}

	buttonAdd.onclick = function () {
		field.innerHTML += "+";
	}

	buttonMul.onclick = function () {
		field.innerHTML += "*";
	}

	buttonDiv.onclick = function () {
		field.innerHTML += "/";
	}

	buttonSub.onclick = function () {
		field.innerHTML += "-";
	}

	buttonEq.onclick = function () {
		field.innerHTML = eval(field.innerHTML);
	}

	buttonRes.onclick = function () {
		field.innerHTML = "";
	}

}
