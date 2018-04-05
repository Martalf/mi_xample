var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Sierra 280 LS");
coche.setColor("Amarillo");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El modelo del coche 1 es: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche 1 despues de frenar es: " + coche.getVelocidad());
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
