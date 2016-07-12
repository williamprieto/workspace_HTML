$("button[id=bcla]").click(function(){
  var oper1 = $("input[name=numero1]").val();//por medio de el nombre
  var oper2 = $("#oper2").val();//por medio de el id
  document.getElementById('igual').innerHTML='=';
  document.getElementById('resul').innerHTML=parseFloat(oper2) + parseFloat(oper1);
  alert(parseInt(oper2) + parseInt(oper1));

});
///funciones para el segundo ejercicio
$("button[id=bcadena]").click(function(){
  var cadena1 = $("#caden").val();//por medio de el id
  var n = cadena1.length;
  //document.getElementById('igual').innerHTML='=';
  alert(n);
  document.getElementById('long').innerHTML=n;

});

///funciones para el tercer ejercicio
$("button[id=bRetorno]").click(function(){
  var cr = $("#numEntr").val();//por medio de el id

  if ( (cr%3 == 0) && (cr%5 == 0) ){
    document.getElementById('rec').innerHTML="fizzbuzz";alert("fizzbuzz");
  } else {
      if (cr%3 == 0) {
      document.getElementById('rec').innerHTML="fizz";alert("fizz");
      } else if (cr%5 == 0){

      document.getElementById('rec').innerHTML="buzz";alert("buzz");
      } else{
         document.getElementById('rec').innerHTML=cr;alert(cr);
      }
    }

});

///funciones para el cuarto ejercicio
$("button[id=bRetorno]").click(function(){
  var cr = $("#numEntr").val();//por medio de el id

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}



});


