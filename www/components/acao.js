// This is a JavaScript file
$(document).on("click","#btnsomar",function(){
var valor1 = $("#valor1").val();
var valor2 = $("#valor2").val();
var result = parseFloat(valor1) + parseFloat(valor2);
$("#resultado").val(result);
})
$(document).on("click","#multiplicar",function(){
var valor1 = $("#valor1").val();
var valor2 = $("#valor2").val();
var result = parseFloat(valor1) * parseFloat(valor2);
$("#resultado").val(result);
})


