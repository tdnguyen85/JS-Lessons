var favThings = ['ruby', 'python', 'perl', 'lua', 'actionscript', 'java', 'r'];

function giveNumber() {
	for(var i=0; i < favThings.length; i+=1) {
		var marker = i + 1;
		document.write("  My #" + marker + " favorite programming language is " + favThings[i] + ".");

	}
}

giveNumber();