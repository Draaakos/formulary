const validationPlace = (value, regex) => value && !!regex.exec(value)
const validationYears = value => {
	if(value) {
		let newValue = parseInt(value);

		if(newValue > 18 && newValue < 65) {
			return true;
		}
		alert('Debes estar entre 18 y 65 años');
	}

	return false;
}
	
const validarForm = () => {
	let status = true;

	const REG_EXP_NAME =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const REG_EXP_EMAIL = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;  
	
	let name = document.getElementById("nombre").value;
	let email = document.getElementById("email").value;
	let year = document.getElementById("edad").value;
	let asunto = document.getElementById("asunto").value;
	let comentarios = document.getElementById("comentarios").value;
	let masculino = document.getElementById("M").checked;
	let femenino = document.getElementById("F").checked;

	status = validationPlace(name, REG_EXP_NAME);
	status = validationPlace(email, REG_EXP_EMAIL);
	status = validationYears(year);
	status = validationPlace(asunto, REG_EXP_NAME);
	status = (comentarios.length < 255)
	status = (masculino || femenino);

	if(status) {
		alert('Se ha enviado el formulario');
	}

	return status;
}

function limpiarform() {
	alert("limpiando");
	document.getElementById("contacto-frm").reset();
}

window.onload = () => {
	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarform;
}

function selectElement(e) {
 console.log('selected', e);
}