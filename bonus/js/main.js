// Consegna: scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

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