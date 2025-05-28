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

// Trova un bonus carino
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