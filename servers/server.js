const express = require("express")
const path = require("path")
const axios = require("axios")


const app = express()


const ELE_PEOPLE_URL = "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/"
let reqCounter = 0
app.use(express.static(path.join(__dirname,"dist")))
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")))
app.use(express.json())
app.use(express.urlencoded())

app.use((reqeust,response,next)=>{
    reqCounter++
    console.log("So many requests! number : "+reqCounter)
    next()
})


const animalsArr = [
    {type: "cat",name:"mshmsh",age:1},
    {type: "dog",name:"bob",age:6},
    {type: "cat",name:"lazy",age:1},
    {type: "parrot",name:"nula",age:2}
]

app.get("/people/:index",function(request,response){
    const indexPerson = request.params.index
    axios.get(ELE_PEOPLE_URL+"people").then((result)=>{
        response.send(result.data[indexPerson])
    })
})

app.get("/animals",function(request,response){
    response.send({animalsArr})
})

//get animal by name
app.get("/animals/:name",function(request,response){
    const animalName = request.params.name
    const foundAnimal = animalsArr.find((animal)=>animal.name == animalName)
    if(foundAnimal){
        response.send(foundAnimal)
    } else {
        response.send({message: "Not found!"})
    }
})

app.post("/animals",function(request,response){
    const newAnimal = request.body
    animalsArr.push(newAnimal)
    response.send(newAnimal)
})


app.delete("/animals/:name",function(request,response){
    const animalName = request.params.name
    const indexAnimal = animalsArr.findIndex((animal)=> animal.name === animalName)
    const deletedAnimal = animalsArr.splice(indexAnimal,1)
    response.send(deletedAnimal)
})


app.get("/elias/:pet",function(request,response){
    if(request.params.pet == "bob"){
        response.send("woof woof")
    }
    if(request.params.pet == "mshmsh"){
        response.send("meow")
    } else{
        response.send("no animal found")
    }
})


app.get("/elias",function(request,response){
    response.send("Hello!")
})

app.get("/hassan",function(request,response){
    if(request.query.meal == "burger"){
        response.send("Yumm!")
    } else if (request.query.meal == "foul") {
        response.send("No thanks")    
    } else {
        response.send("Umm okay i guess")
    }
})

app.get("/getrandom",function(request,response){
    response.send(JSON.stringfy(generateNumber()))
})

const generateNumber = function(){
    return Math.random(1000)
}

app.get("/furniture/:name", function(request,response){
    const store = [
        { name: "table", inventory: 3, price: 800 },
        { name: "chair", inventory: 16, price: 120 },
        { name: "couch", inventory: 1, price: 1200 },
        { name: "picture frame", inventory: 31, price: 70 }
    ]
    const resultFurniture = store.find((furniture)=> furniture.name == request.params.name)
    if(resultFurniture){
        response.send({price :resultFurniture.price})
    } else {
        response.send("This is not in the store")
    }
})

app.listen(4000,function(){
    console.log("Now listening on port 4000")
})