 var matriz2 = [['*','',''],['','',''],['','*','']];
 var filaMax=2;
 var columMax=2;

function crearTablero(){
	// var div = document.getElementById("tablero");
	// div.style.height = 300px;
				for(var f = 0; f < 3; f++){
			        for(var c = 0; c <3 ;c++){			           
			           var div = document.createElement("div");
			            div.id = f + "" + c;			            
			            div.addEventListener("click",mostrarNumero, true);			            
			            tablerominas.appendChild(div);
			        }
			    }		    
			    
			}

function cargarTablero(){
			crearTablero();
			//generarBombas(minas);
			//bombasAlrededor(minas);
		}
 
function mostrarNumero( ){
	var auxstr = this.id.split("");				
	var myid = auxstr[0] + auxstr[1];			
	divObj = document.getElementById(myid);

	var fila=parseInt(auxstr[0]);
	var columna=parseInt(auxstr[1]);
	var acumuladorMina=0;

	console.log(fila +" "+columna);
	console.log("matris"+matriz2[fila][columna]);

	if (matriz2[fila][columna]==='*'){
		acumuladorMina="Game Over";
		divObj.style.backgroundImage = "url(bomba.jpg)";						
		alert("Game Over");
}
  	else {
  		divObj.style.backgroundColor = "white";	
	  	if((columna-1)>=0 && matriz2[fila][columna-1]==='*')
	  		{acumuladorMina=acumuladorMina+1;}
	  	if((columna+1)<=columMax && matriz2[fila][columna+1]==='*')
	  		{acumuladorMina=acumuladorMina+1;}
	  	if((fila+1)<=filaMax && matriz2[fila+1][columna]==='*') //0,1
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

	  	console.log("acu:"+acumuladorMina);
	  	
	  	document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + acumuladorMina + "</p>";
					
					}
	}