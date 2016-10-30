'use strict';

angular.module('Minesweeper')
.controller('minesweeper', function ($scope) {
  var matriz2 = [['*','',''],['','',''],['','*','']];
  $scope.crearMatriz= matriz2;
  // var mina2=0;
   var filaMax=2;
   var columMax=2;
  $scope.controller_loaded = 'Minesweeper loaded!';
  
  $scope.seleccionarCelda = function(fila,columna){
  	// return 1;
  	 var acumuladorMina=0;
  	// if((fila-1)>=0 && matriz2[fila-1][columna].toEqual('*')) mina2=mina2+1;
  	// if((fila+1)<=filaMax && matriz2[fila+1][columna].toEqual('*')) mina2=mina2+1;
  	
  	if((columna-1)>=0 && matriz2[fila][columna-1]==='*')
  		{acumuladorMina=acumuladorMina+1;}
  	if((columna+1)<=columMax && matriz2[fila][columna+1]==='*')
  		{acumuladorMina=acumuladorMina+1;}
  	if((fila+1)<=filaMax && matriz2[fila+1][columna]==='*') 
  		{acumuladorMina=acumuladorMina+1;}
  	if((fila-1)>=0 && matriz2[fila-1][columna]==='*') 
  		{acumuladorMina=acumuladorMina+1;}

  	//vertices arriba

  	if((fila-1)>=0 && (columna-1)>=0 && matriz2[fila-1][columna-1]==='*')
  		{acumuladorMina=acumuladorMina+1;}
  	if((fila-1)<=0 && (columna+1)<=columMax && matriz2[fila-1][columna+1]==='*')
  		{acumuladorMina=acumuladorMina+1;}
  	//vertices abajo
  	if((fila+1)<=filaMax && (columna-1)>=0 && matriz2[fila+1][columna-1]==='*')
  		{acumuladorMina=acumuladorMina+1;}
  	if((fila+1)<=filaMax && (columna+1)<=columMax && matriz2[fila+1][columna+1]==='*')
  		{acumuladorMina=acumuladorMina+1;}

  		console.log(acumuladorMina);

  	// if((columna+1)>=0 && matriz2[columna+1][fila].toEqual('*')) mina2=mina2+1; 
 
  	 return acumuladorMina;
  };

})
.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
