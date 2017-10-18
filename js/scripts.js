var add = function (number1, number2){
	return number1 + number2;
};

var subtract = function (number1, number2) {
  return number1 - number2;
};


var multiply = function (number1, number2) {
  return number1 * number2;
};

var divide = function (number1, number2) {
  return number1 / number2;
};



// UI logic: //

$(document).ready(function() {
	$("form#add").submit(function(event) {

		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);

	$("#output-add").text(result)
	event.preventDefault();
	});

	$("form#subtract").submit(function(event) {

		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);

	$("#output-subtract").text(result);
	event.preventDefault();
	});

	$("form#multiply").submit(function(event) {

		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);

	$("#output-multiply").text(result);
	event.preventDefault();
	});

	$("form#divide").submit(function(event) {

		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);

	$("#output-divide").text(result);
	event.preventDefault();
	});
});
