'use strict';
   var matriz2 = [['*','',''],['','',''],['','*','']];
   var filaMax=2;
   var columMax=2;

angular.module('Minesweeper')

.controller('minesweeper', function ($scope) {
   $scope.crearMatriz= matriz2;
   $scope.controller_loaded = 'Minesweeper loaded!';
   $scope.seleccionarCelda = function(fila,columna){
  	  		return counterMines(fila,columna);};
            })

.controller('minaControl',function(){
 
this.mostrarNumero =function (event){
  console.log("entroo:"+event.target.id);
  var auxstr = event.target.id.split("");       
  var myid = auxstr[0] + auxstr[1];     
  var divObj = document.getElementById(event.target.id);

  var fila=parseInt(auxstr[0]);
  var columna=parseInt(auxstr[1]);
  var acumuladorMina=0;

  console.log(fila +" "+columna);
  console.log("matris"+matriz2[fila][columna]);
  acumuladorMina=counterMines(fila,columna);

  if (acumuladorMina==='Game Over'){
    divObj.style.backgroundImage = "url(bomba.jpg)";            
    alert("Game Over");}
  else {divObj.style.backgroundColor = "white";
    document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + acumuladorMina + "</p>";
      }
      console.log("acu:"+acumuladorMina);
      }
    })

.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
})
.directive('minesData', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/mines/views/minesweeper.html'
    }
  });


var counterMines= function (fila,columna) {
   var acumuladorMina=0;
  if (matriz2[fila][columna]==='*'){
        return 'Game Over';}
    else {
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
      if((fila-1)>=0 && (columna+1)<=columMax && matriz2[fila-1][columna+1]==='*')
        {acumuladorMina=acumuladorMina+1;}
      //vertices abajo
      if((fila+1)<=filaMax && (columna-1)>=0 && matriz2[fila+1][columna-1]==='*')
        {acumuladorMina=acumuladorMina+1;}
      if((fila+1)<=filaMax && (columna+1)<=columMax && matriz2[fila+1][columna+1]==='*')
        {acumuladorMina=acumuladorMina+1;}
       return acumuladorMina;
    }
  }
