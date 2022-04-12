//código del cuadrado 
console.group("cuadrados")

// const ladoCuadrado = 5;
// console.log(`los lados del cuadrado miden: ${ladoCuadrado} cm`);

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("el perímetro del cuadradro es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el area del cuadradro es: " + areaCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd();


//código del triángulo

console.group("triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm");

// console.log("la altura del triangulo mide: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log("el perímetro del triangulo mide: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("el area del triangulo mide: " + areaTriangulo + "cm");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2
}

console.groupEnd();


//código del circulo
console.group("circulo");

// //radio
// const radioCirculo = 4;
// console.log("el radio del circulo mide: " + radioCirculo + " cm");

// //diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("el diametro del circulo mide: " + diametroCirculo + " cm");

// //pi
// const PI = Math.PI;
// console.log("el PI es: " + PI);

// //circunferencia

// const perimetroCirculo = diametroCirculo * PI;
// console.log("el perímetro del circulo mide: " + perimetroCirculo + " cm");

// //area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("el area del circulo mide: " + areaCirculo + " cm");

const PI = Math.PI;

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2
}

function perimetroCirculo(radioCirculo) {
    const diametroCirc = diametroCirculo(radioCirculo)
    return diametroCirc * PI
}

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI
}

console.groupEnd();


//aquí interactuamos con html



//cuadrado


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area)
}


//triangulo


function calcularAreaTriangulo() {
    const input = document.getElementById("InputTrianguloBase")
    const input1 = document.getElementById("InputTrianguloAltura")
    const value = input.value
    const value1 = input1.value

    const area = areaTriangulo(value, value1)
    alert(area)

}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloLado");
    const input1 = document.getElementById("InputTrianguloBase")

    const lado = parseInt(input.value)
    const base = parseInt(input1.value)

    const perimetro = perimetroTriangulo(lado, lado, base)
    alert(perimetro)
}


//circulo


function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculoRadio")
    const radio = input.value
    const diametro = diametroCirculo(radio)
    alert(diametro)
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculoRadio")
    const radio = input.value
    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
}


function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculoRadio")
    const radio = input.value
    const area = areaCirculo(radio)
    alert(area)
}