// Write your solution here!
let drivers = ["Milo","Otis","Garfield"];
let arrayFunctions = (drivers) => {
    drivers.push("Ralph")
    drivers.pop()
    drivers.unshift("Bob")
    drivers.shift()
    drivers.pop()
    drivers.push('Garfield')
    drivers.shift()
    drivers.unshift('Milo')
    const drivers1 = [...drivers, 'Broom']
    const drivers2 = ['Broom', ...drivers]
    const copyOfDrivers = drivers.slice()
    drivers.pop
    drivers.unshift
}