let x = 10
let y = "10"
try{
    console.log(x+y)
    if(typeof y === 'string'){
        throw new Error("Bad input, send a number")
    }
} catch (error){
    console.log(error)
}
console.log("Success!")
while(true){
    console.log("in loop")
}