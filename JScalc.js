function insira(numx)
{
	var numero = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = numero + numx;
	if (numero >= 10000000000000000000000000){	
		alert("Número MUITO grande, a calculadora irá reiniciar p/ evitar erros")
		clean()
	}
};
function clean(){
	document.getElementById('result').innerHTML="";
};
function back(){
	var apaga = document.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML = apaga.substring(0, apaga.length -1);
};
function calcular(){
	var numero = document.getElementById('result').innerHTML;
	if(numero){
		document.getElementById('result').innerHTML = eval(numero);
	}else{
		document.getElementById('result').innerHTML = "Não há valores, aperte 'C'"
	}
	
};