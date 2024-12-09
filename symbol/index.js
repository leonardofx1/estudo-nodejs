const oi = Symbol('ola')
const obj = {
    [oi]: 'oi'
}
//undefined

console.log(obj['ola'])
console.log(obj.ola)

//return o valor
const value = obj[oi]
console.log(value)

// criando prop unica para class
const itemColor = Symbol('color')
class Car {
    constructor(color){
        this[itemColor] = color

    }
    get() {
        return this[itemColor]
    }

}
const car = new Car('red')
console.log(car.get())

