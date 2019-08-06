var verificar = true;
var a;
$(document).on("click","#valor1",function(){
var numero1 = 1;
 var re = $("#resultado").val();
 $("#resultado").val(re + numero1);
});

$(document).on("click","#valor2",function(){
var numero2 = 2;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero2);
});

$(document).on("click","#valor3",function(){
var numero3 = 3;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero3);
});

$(document).on("click","#valor4",function(){
var numero4 = 4;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero4);
});

$(document).on("click","#valor5",function(){
var numero5 = 5;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero5);
});

$(document).on("click","#valor6",function(){
var numero6 = 6;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero6);
});

$(document).on("click","#valor7",function(){
var numero7 = 7;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero7);
});

$(document).on("click","#valor8",function(){
var numero8 = 8;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero8);
});

$(document).on("click","#valor9",function(){
var numero9 = 9;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero9);
});
$(document).on("click","#valor0",function(){
var numero0 = 0;
 var re = $("#resultado").val();

 $("#resultado").val(re + numero0);
});



$(document).on("click","#apagar",function(){
v1= parseFloat($(resultado).val());
$("#resultado").val("");
var re = $("#resultado").val();
});

$(document).on("dblclick","#parenteses",function(){
v1= parseFloat($(resultado).val());
$("#resultado").val();
 
 if(verificar == true){
    $("#resultado").val(")");
    console.log("teste");
    verificar=false;
 }

 else{
    $("#resultado").val("(");
    verificar=true; 
 }
});
$(document).on("click","#igual",function(){
v2 = parseFloat($(resultado).val());
if(a =="soma"){
$("#resultado").val(v1 + v2);
}
if(a =="subtracao"){
$("#resultado").val(v1 - v2);
}
if(a =="divisao"){
$("#resultado").val(v1 / v2);
}
if(a =="multiplicacao"){
$("#resultado").val(v1 * v2);
}
})

$(document).on("click","#soma",function(){
v1= parseFloat($(resultado).val());
$("#resultado").val("");
a = "soma";
var re = $("#resultado").val();
});

$(document).on("click","#subtracao" ,function(){
v1 = parseFloat($(resultado).val());
$("#resultado").val("");
a ="subtracao";
var re = $("#resultado").val();
});
$(document).on("click","#divisao",function(){
v1 = parseFloat($(resultado).val());
$("#resultado").val("");
a ="divisao";
var re = $("#resultado").val();
});
$(document).on("click","#multiplicacao",function(){
v1 = parseFloat($(resultado).val());
$("#resultado").val();
a = "multiplicacao";
$("#a").text($(this).val());
});