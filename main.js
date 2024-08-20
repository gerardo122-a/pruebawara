var typed =  new  Typed ( '.typed' ,  {
	//strings : [
	//	< i class ="mascota" > Gato </i> ,
	 //   < i class ="mascota" > Perro </i> ,
	//	< i class ="mascota" >  Conejo </i> ,
	//	<i class = "mascota" >  Pez </i> ,
//],
	stringsElement : '#cadenas-texto' ,  // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed : 80 ,  // Velocidad en mlisegundos para poner una letra,
	startDelay : 300 ,  // Tiempo de retraso en iniciar la animación. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed : 80 ,  // Velocidad en milisegundos para borrar una letra,
	smartBackspace : true ,  // Eliminar solo las palabras que sean nuevas en una cadena de texto.
	shuffle : false ,  // Alterar el orden en el que escribe las palabras.
	backDelay : 1500 ,  // Tiempo de espera despues de que termine de escribir una palabra.
	loop : true ,  // Repetir el arreglo de cadenas
	loopCount : false ,  // Cantidad de veces a repetir el array. falso = infinito
	showCursor : true ,  // Mostrar cursor palpitante
	cursorChar : '|' ,  // Caracter para el cursor
	contentType : 'html' ,  // 'html' o 'null' para texto sin formato
} ) ;
