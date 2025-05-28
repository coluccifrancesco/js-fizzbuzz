for (let i = 1; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0){
        
        console.log("Fizz Buzz")
    
    } else if(i % 3 == 0){
    
        console.log("Fizz")
    
    } else if (i % 5 == 0){
    
        console.log("Buzz")
    
    } else {

        console.log(i)

    }
}

// Bonus: scelta di "i" da parte dell'utente
console.log("")
console.log("Da qui inizia il bonus!")
console.log("")

const userChoice = Number(prompt("Scegli un numero iniziale"))
const userChoice2 = Number(prompt("Scegli un numero finale"))

for (let i = userChoice; i <= userChoice2; i++) {
    
    if (i % 3 == 0 && i % 5 == 0){
        
        console.log("Fizz Buzz")
    
    } else if(i % 3 == 0){
    
        console.log("Fizz")
    
    } else if (i % 5 == 0){
    
        console.log("Buzz")
    
    } else {

        console.log(i)

    }
}

// Bonus: scelta di "Fizz" e "Buzz" da parte dell'utente

console.log("")
console.log("Da qui secondo bonus!")
console.log("")

const userChoiceFizz = Number(prompt("Scegli Fizz"))
const userChoiceBuzz = Number(prompt("Scegli Buzz"))

for (let i = userChoice; i <= userChoice2; i++) {
    
    if (i % userChoiceFizz == 0 && i % userChoiceBuzz == 0){
        
        console.log("Fizz Buzz")
    
    } else if(i % userChoiceFizz == 0){
    
        console.log("Fizz")
    
    } else if (i % userChoiceBuzz == 0){
    
        console.log("Buzz")
    
    } else {

        console.log(i)

    }
}