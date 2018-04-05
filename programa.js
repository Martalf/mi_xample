//Modulo
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tienda;
(function (Tienda) {
    var Ropa = (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de Tecnologia: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica; //nos traemos la clase Informatica del modulo Tienda con un nombre en concreto
var cargar_informatica = new Informatica('PonchoTecnology'); //instanciamos la clase con una variable
// y diciendole que es un nuevo objeto de la clase que estamos importando.
//Decorador 
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
Programa = __decorate([
    arranque('Finalizando el curso de TypeScript')
], Programa);
var miPrograma = new Programa();
miPrograma.lanzamiento();
var editorVideo = (function (_super) {
    __extends(editorVideo, _super);
    function editorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    editorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    editorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    editorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return editorVideo;
}(Programa));
var editVideo = new editorVideo();
editVideo.setNombre("AudioPhoneEditor");
editVideo.setVersion(12);
editVideo.setTimeline(3500);
console.log("Las especificaciones del Editor de música son: " + editVideo.getAllData());
//Lógica del Formulario
var programas = []; //lo que le estamos indicando es que la variable es un array de tipo string
function guardar() {
    var nombre = document.getElementById("nombre").value.toString(); //toString convierte
    //el valor en string, el que se mete por el input
    var miPrograma = new Programa();
    miPrograma.setNombre(nombre);
    miPrograma.setVersion(1);
    programas.push(miPrograma); //agregamos los valores que introduzcamos en el input text al arreglo
    //Se recorre todo el arreglo de programas con un bucle foreach
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list; //aca introducimos el recorrido del arreglo programas y lo metemos
    //listado 
    document.getElementById("nombre").value = "";
}
/*Funciones flechas nos permiten ejecutar de manera mas rápida y mas legible definir funciones*/
setInterval(function () {
    console.log('hola');
}, 1000);
var frutas = ['Manzana', 'Naranja', 'Platano'];
var recorrer = frutas.map(function (fruta) {
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
