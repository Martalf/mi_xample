//Modulo

module Tienda{

	 export class Ropa{
		constructor(public titulo:string){
			alert(titulo);
		}
	}

	 export class Informatica{
		constructor(public titulo:string){
			alert('Tienda de Tecnologia: '+titulo);
		}
	}
}


import Informatica = Tienda.Informatica; //nos traemos la clase Informatica del modulo Tienda con un nombre en concreto
let cargar_informatica = new Informatica('PonchoTecnology'); //instanciamos la clase con una variable
// y diciendole que es un nuevo objeto de la clase que estamos importando.

//Decorador 
function arranque(lanzar:string){
	return function(target:Function){
		target.prototype.lanzamiento = function():void{
			alert(lanzar);
		}
	}
}

@arranque('Finalizando el curso de TypeScript')
class Programa{

	public nombre:string;
	public version:number;


	public getNombre(){
		return this.nombre;
	}

	public setNombre(nombre:string){
		this.nombre = nombre;
	}

	public getVersion(){
		return this.version;
	}

	public setVersion(version:number){
		this.version = version;
	}

}

	var miPrograma = new Programa();
	miPrograma.lanzamiento();

class editorVideo extends Programa{

	public timeline:number;

	public setTimeline(timeline:number){
		this.timeline = timeline;
	}

	public getTimeline(){
		return this.timeline;
	}

	public getAllData():string{

		return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
	}

}

	var editVideo = new editorVideo();
		editVideo.setNombre("AudioPhoneEditor");
		editVideo.setVersion(12);
		editVideo.setTimeline(3500);

		console.log("Las especificaciones del Editor de música son: "+editVideo.getAllData());



//Lógica del Formulario

	var programas = []; //lo que le estamos indicando es que la variable es un array de tipo string

		function guardar(){ //funcion que va a ser llamada desde el formulario al hacer click en guardar

			var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();//toString convierte
			//el valor en string, el que se mete por el input

			var miPrograma = new Programa();
			miPrograma.setNombre(nombre);
			miPrograma.setVersion(1);

			programas.push(miPrograma); //agregamos los valores que introduzcamos en el input text al arreglo

			//Se recorre todo el arreglo de programas con un bucle foreach

			var list = "";
				for (var i = 0; i < programas.length; i++){
					list = list+"<li>"+programas[i].getNombre()+"</li>";
				}

			var listado = <HTMLElement>document.getElementById("listado");
				listado.innerHTML = list; //aca introducimos el recorrido del arreglo programas y lo metemos
				//listado 

			(<HTMLInputElement>document.getElementById("nombre")).value = "";	
		}

	/*Funciones flechas nos permiten ejecutar de manera mas rápida y mas legible definir funciones*/

		setInterval(()=>{
			console.log('hola');
		}, 1000);

		var frutas = ['Manzana', 'Naranja', 'Platano'];

		var recorrer = frutas.map(fruta => { //el .map es para recorrer todo el arreglo
			console.log(fruta);
			console.log(fruta.length);
		});


	/* 
		- Los módulos son muy famosos en el nuevo angular2, lo que son import y export
		- permiten modularizar la aplicación, mejorar la legibilidad.
		- el módulo permite organizar nuestra funcionalidad-programa, en diferentes ficheros, clases.
		- optimización,
		exportar clases de ese módulo.
		importar funcionalidades a la aplicación.
		para hacer un módulo hay que utilizar el comando module, dentro del módulo se definen las clases.
		para permitir que las clases del módulo sean usadas desde otros sitios debes colocarle el export
		para llamar a esas clases utilizamos la palabra import 
	*/