// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
let array = [1,2,3,4,5]
//1
console.log(array[0])

//2
console.log(array.shift())-
//3
console.log(array.reverse().pop())

//4
console.log(array)
console.log(array.values().next().value)

// ¿Cómo acceder al último elemento de un array? Dime 4 opciones

array = [1,2,3,4,5]

//1
console.log(array[array.length -1])

//2

console.log(array.pop())

//3
console.log(array.reverse().shift())

//4

console.log(array.reverse().values().next().value)

/*Funcionan pero el array va cambiando al aplicar los comandos*/ 