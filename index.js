
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
    },
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
    grupos: ["grupo1", "grupo2"],
    cartelera: "",
    fecha: "",
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
portatil3.modelo = "P345";
//10
concierto.cartelera = 'Guns and roses';
//11
concierto.fecha= new Date();
//12
/*
const impresora = {
    imprimiendo: {
        nombreArchivo: "",
        copias: "",
        numPaginas: "",
    }
};
impresora.imprimiendo.nombreArchivo="u"
impresora.imprimiendo.copias = ""
*/
const impresora = {
    imprimiendo: {},
}
impresora.imprimiendo = { nombreArchivo: "U", copias: 1, numPaginas: 5 };

//13
const noticia = {
    titular: '',
    cuerpo: '',
}
//14
const persona = {
    nombre: "",
    apellidos: "",
    edad: 5 ,
}
//15
const avion = {
    numpasajeros: '',
    despegar: function () {
        return console.log('despegando')
    },
    volar: function () {
        return console.log('llegando al destino')
    },
    aterrizar: function () {
        return console.log('aterrizando')
    }
};
// 16
const paquete = {
    contenido: ["cascos", "pelucas", "tintes"],
}

// 17
const pais = {
    numhabitantes: "",
    continente: "",
    gentilicio: '' ,
}
//18

const O_error = {
    codigo: '404',


}
const codError = O_error.codigo;
