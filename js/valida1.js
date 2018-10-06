/*window.onload = function()
{ 
	alert("conectado");
}*/

function validarForm()
{
	alert("Validando ahora");
}

function limpiarForm()
{
	alert("Limpiando");
	document.getElementById("contacto-frm").reset();
}

window.onload = function()
{
	
alert("window onload");

	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	botonEnviar = document.contacto_frm.enviar_btn;
	botonEnviar.onclick = validarForm;

}