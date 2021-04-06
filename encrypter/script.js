$(document).ready(function() {
	
	var update = function() {
		var currentVal = $("#input").val();
		var shift = parseInt($("#shift").val());
		var output = encrypt(currentVal, shift);
		$("#output").val(output);
	};
	
	$("#shift").change(update);
	$("#input").keyup(update);

});


const alphabet = {
	uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowercase: "abcdefghijklmnopqrstuvwxyz"
};

const encrypt = function(input, shift) {
	var result = "";
	for (var i = 0; i < input.length; i += 1) {
		var acase = getCase(input[i]);
		switch (acase) {
			case 0:
				{
					var upperId = alphabet.uppercase.indexOf(input[i]) + shift;
					upperId = accountForOvers(upperId);
					result += alphabet.uppercase[upperId];
					continue;
				}
			case 1:
				{
					var letterId = alphabet.lowercase.indexOf(input[i]) + shift;
					letterId = accountForOvers(letterId);
					result += alphabet.lowercase[letterId];
					continue;
				}
			default:
				{
					result += input[i];
				}
		}
	}
	return result;
};

const getCase = function(ci) {
	if (alphabet.uppercase.indexOf(ci) !== -1) {
		return 0;
	}
	if (alphabet.lowercase.indexOf(ci) !== -1) {
		return 1;
	}
	else {
		return 2;
	}
};

var accountForOvers = function(num) {
	if (num > 25) {
		num -= 26;
	}
	return num;
};
