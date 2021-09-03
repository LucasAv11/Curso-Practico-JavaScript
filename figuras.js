//Codigo del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// "Los lados del triangulo miden: " 
//  + ladoTriangulo1 
//  + "cm, " +
//  ladoTriangulo2 
//  + "cm, " 
//  + baseTriangulo 
//  + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo miden: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo miden: " + perimetroTriangulo + "cm");

function areaTriangulo  (base, altura){
    return  (base * altura) / 2; 

}
// console.log("El area del triangulo miden: " + areaTriangulo + "cm");


console.groupEnd();

//Codigo del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del Circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo (radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area
function areaCirculo(radio){
  return (radio* radio) * PI;
}

console.groupEnd();
