//cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado)
    alert(area)
}

//triángulo

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2
}

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

//----------------------------------------------------------------------------------------------------------------
const clickOption = document.querySelectorAll(".content__fig")
clickOption.forEach(options => {

    options.addEventListener("click", showFigure);

});

const geometricCards = document.querySelectorAll(".geometric")

function showFigure() {
    const arr = Array.from(geometricCards);

    arr.forEach(card => {
        card.classList.remove("geometric--active")
    })

    const element = arr.find(card => {
        return this.dataset.geo === card.id
    })
    element.classList.add("geometric--active");
}