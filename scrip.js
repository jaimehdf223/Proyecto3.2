function limpiarFormulario(){
	document.getElementById("miForm").reset();
}




var calculo = function(n1){
	var numero1=parseFloat(document.getElementById("numero1").value);
	var E = numero1/5280;
	return "La equivalencia es: "+E+" mi";
}




 var NuMeros = function (num1, num2, num3, num4, num5){
 	var num1 = 	parseFloat (document.getElementById("num1").value);
 	var num2 = 	parseFloat (document.getElementById("num2").value);
 	var num3 = 	parseFloat (document.getElementById("num3").value);
 	var num4 = 	parseFloat (document.getElementById("num4").value);
 	var num5 = 	parseFloat (document.getElementById("num5").value);
 	var promedio = (num1+num2+num3+num4+num5);
 		var P =promedio/5;
 	return "El promedio es: "+P;
 }