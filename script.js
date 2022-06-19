let i = 0
while(i<10){
    let car = []
    alert("Bienvenido a seguros para tu auto clasico")
    let anio = prompt("Cual es el año de su auto?")
    car.push(anio)
    let brand = prompt("que marca es su auto?")
    car.push(brand)
    let model = prompt("que modelo es?")
    car.push(model)
    alert("tu auto es un " + brand + " " + model + " del año " + anio)
    console.log(car)
    i++;
    alert("Esta es tu consulta Nro " + i)
    if (anio > 1990){
        alert("Su auto no se considera clasico");
        brand(anio);
    }
    else if (anio < 1900){
        alert("ingrese un numero valido por favor")
    }
    else{
    alert("Felicidades tu auto " + brand + " del año " + anio + " califica para seguros auto clasico!")
    console.log("Felicidades tu auto " + brand + " del año " + anio + " califica para seguros auto clasico!")
    }
}




