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
    alert(`El perímetro de tu cuadrado es ${perimetro}`)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado)
    alert(`El área de tu cuadrado es ${area}`)
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
    alert(`El área de tu triángulo es ${area}`)

}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloLado");
    const input1 = document.getElementById("InputTrianguloBase")

    const lado = parseInt(input.value)
    const base = parseInt(input1.value)

    const perimetro = perimetroTriangulo(lado, lado, base)
    alert(`El perímetro de tu triángulo es ${perimetro}`)
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
    alert(`El diámetro de tu círculo es ${diametro}`)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculoRadio")
    const radio = input.value
    const perimetro = perimetroCirculo(radio)
    alert(`El perímetro de tu círculo es ${perimetro}`)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculoRadio")
    const radio = input.value
    const area = areaCirculo(radio)
    alert(`El área de tu círculo es ${area}`)
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