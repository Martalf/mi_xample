function holamundo(nombre){
	return "Bienvenido a Typescript" + nombre;

}

	var nombre = " Alfonso Martínez";
	var resultado = holamundo(nombre);
	
	var etiqueta = <HTMLElement>document.getElementById("container");
	etiqueta.innerHTML = resultado;

	var nombre:string = "Alfonso Martínez";
	var edad:number = 30;
	var programer:boolean = true;
	var langs: Array<string> = ["php", "JavaScript", "HTML", "CSS"];

	etiqueta.innerHTML = nombre+" - "+edad;


	var a = 7;	
	var b = 12;

		if(a===7){
			let a =14;
			var b =2;

				console.log("DENTRO DEL IF:"+a+" - "+b);
		}

				console.log("FUERA DEL IF:"+a+" - "+b);
	

		//alert("HOLA MUNDO ALFONSO");

	//funciones y tipeado


		function devuelveNumero(num:number):string{
			return "Número devuelto: "+num;
		}

		function devuelveString(texto:string):boolean{
			if(texto == "hola"){
				var num = true;

			}else{
				var num = false;
			}

			return num;
		}

		alert(devuelveNumero(34));
		alert(devuelveString("perro"));



	/*innerHTML con esta instruccion se toma el elemento de id container y se mete el valor que devuelve la
	funcion holamundo

---------------POO EN TYPESCRIPT------------------
	
	POO hacernos concebir una aplicación construida hemulando todo como un objeto.
	PARA DEFINIR UN objeto es necesario una clase que puede verse como un ser

	La etiqueda  sript por recomendaciones se edebe escribir al final del body
	hay que compilar cada vez se hacen modificaciones.
	existe la posbilidad de asignar el tipo de dato a la variable descrita

	cuando le asignas a una función que devuelva un tipo de dato diferente por ejemplo un string puedes
	colocar en el return una cadena y le concatenas el numero.

	El tipo any nos permite asignarle un valor de cualquier tipo a una variable y luego poder asignarle un valor de otro tipo completamente diferente sin ningún tipo de problema.

Ejemplo:

    var numero = 44;
     
    numero = "Hola que tal";
     
    numero = true;
     
    console.log(numero); //devuelve true

		Diferencia entre  var y let

		el let delimita el alcance de la declaración de la misma al bloque o expresión

		variable global, sin importar el ambito de quien está detrás

		uno le puede decir a una función el tipo de dato que va a devolver


	*/


