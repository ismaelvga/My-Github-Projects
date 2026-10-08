// personaje de tv
let nombre = "kick butowski"
let ofico = " Medio doble de riesgo"
let edad = null;

let personaje = {
    nombre:"Kick butowski",
    ofico:"Medio doble de riesgo",
    edad: 10,

};
console.log(personaje);
console.log(personaje['nombre']);

personaje.edad = 13;

personaje['nombre'] = "bukowski";

delete personaje.ofico