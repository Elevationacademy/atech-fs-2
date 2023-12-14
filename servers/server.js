const express = require("express")
const path = require("path")
const app = express()


app.use("/tweeter",express.static(path.join(__dirname,"twetter")))
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")))

app.get("/",function(request,response){
  response.send("hello")  
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