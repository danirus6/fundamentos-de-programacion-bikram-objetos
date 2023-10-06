
//1
const Coche = {
    marca: "Audi",
    modelo: "A1",
    matricula: "UwU"
};
//2
const Casa = {
    codPostal: "11111",
    calle: "Rue del percebe",
    portal: "2",
    piso: "Izquierda"
}; 
//3
const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
};
//4
const Perro = {
    nombre: "Chibi",
    raza: "chihuahua",
    color: "blanco",
    edad: 33,
    ladrar: function () {
        return "GUAU";
    },
    popo: function () {
        return Math.random() *3;
    }
};

//5
const portatil = {
    marca: "Asus",
};
const marcaPortatil = portatil.marca;

//6
const portatil2 = {
    marca: "Lenovo2"
};
const marcaPortatil1 = portatil2["marca"];
//7
const concierto = {
    grupos: ["grupo1","grupo2"]
};
const grupos = concierto["grupos"];
//8
const led = {
    rojo: false,
    verde: false,
    azul: true,
};
const arrayRGB = [led.rojo, led.verde, led.azul]
//9

const portatil3 = {
    modelo: "nombre"
};

//Eder


//Laura
portatil3.modelo = "P345";
