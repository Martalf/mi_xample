interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}


class Coche implements CocheBase{
	
	public color:string;
	public modelo:string;
	public velocidad:number;

		constructor(modelo:any = null){	
			this.velocidad = 0;
			this.color = "Blanco";

			if(modelo == null){
				this.modelo = "BMW Generico"
			}else{
				this.modelo = modelo;	
			}

		}

		public getModelo():string{
			return this.modelo;
		}

		public setModelo(modelo:string){
			this.modelo = modelo;
		}

		public getColor(){
			return this.color;
		}

		public setColor(color:string){
			this.color = color;
		}

		public acelerar(){
			this.velocidad++;
		}

		public frenar(){
			this.velocidad--;
		}

		public getVelocidad():number{
			return this.velocidad;
		}

	}

		var coche = new Coche("Sierra 280 LS");
		coche.setColor("Amarillo");
		coche.acelerar();
		coche.acelerar();
		coche.acelerar();


		console.log("El modelo del coche 1 es: "+coche.getModelo());	
		console.log("El color del coche 1 es: "+coche.getColor());
		console.log("La velocidad del coche 1 es: "+coche.getVelocidad());

		coche.frenar();

		console.log("La velocidad del coche 1 despues de frenar es: "+coche.getVelocidad());

		/*var coche_dos = new Coche();
		var coche_tres = new Coche();	

		
		coche_dos.setColor("Azul");
		coche_tres.setColor("Rojo");

		console.log("El color del coche 1 es: "+coche.getColor());
		console.log("El color del coche 2 es: "+coche_dos.getColor());
		console.log("El color del coche 3 es: "+coche_tres.getColor());
/*

en las interfaces permite decirle a la clase que los utiliza decirle que propiedades o métodos va a tener de forma
obligatoria, las interfaces se usan para hacer un software robusto
Los especificadores de acceso públicos hacen que los atributis y métodos sean accesibles desde cualquier otra
clase
los atributos y metodos protected solo pueden ser accedidos desde la misma clase donde fueorn definidos o
desde una clase que herede desde el padre. 
con private los metodos y tributos solo pueden ser accedidos desde la clase que los crea
Los parámetros se pasan cuando se crean los objetos
con toda clase se recomienda por buenas prácticas tener metodos getters y setters
getter consigue el valor que tiene una propiedad
con this accedemos al valor del atributo. 
utilizamos el "this" para accesar al valor de la variable.
podemos especificar que tipo de variable devuelve un método colocando un par de puntos suspensivos despues del 
paréntesis que cierra el argumeno del método.
constructor se usa para darle un valor a los miembros de la clase.

herencias, clases hijas heredan de la clase padre.

*/