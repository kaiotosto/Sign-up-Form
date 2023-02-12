const password = document.getElementById("password");
const confirmation = document.getElementById("confirm");

confirmation.addEventListener("input", () => {
	let pass1 = document.getElementById("password").value;
	let pass2 = document.getElementById("confirm").value;
	if (pass1 != pass2) {
		confirmation.setCustomValidity("password mismatch");
	} else {
        confirmation.setCustomValidity("");
    }
});

password.addEventListener("input", () => {
	let pass1 = document.getElementById("password").value;
	let pass2 = document.getElementById("confirm").value;
	if (pass1 != pass2) {
		confirmation.setCustomValidity("password mismatch");
	} else {
        confirmation.setCustomValidity("");
    }
});