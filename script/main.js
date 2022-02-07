var form = document.getElementById('form');

form.addEventListener('submit', event =>{
	event.preventDefault();

    var email=form['email'].value;

    if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValid(email)) {
		addErrorTo('email', 'please provide a valid email');
	} else {
		removeErrorTo('email');
	}
    alert (email);
});
function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorTo(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}
function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}