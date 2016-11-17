var surname = {
	value: "",
	process: function () {
		if (this.value === "") {
			alert("Don't be shy");
		} else {
			alert("Hello, " + this.value + ", sir");
		}
	}
}

surname.value = prompt('Greetings friend, may I enquire as to your surname?');
surname.process();

