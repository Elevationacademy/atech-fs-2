const ELE_PEOPLE_URL = "https://ele-people-api-8eb0b1bd9b96.herokuapp.com/"

const express = require("express")
const path = require("path")
const axios = require("axios")
const animalApi = require("./routes/animalsApi")


const app = express()



let reqCounter = 0
app.use(express.static(path.join(__dirname,"dist")))
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")))

app.use(express.json())
app.use(express.urlencoded())

app.use("/animals",animalApi)

app.use((reqeust,response,next)=>{
    reqCounter++
    console.log("So many requests! number : "+reqCounter)
    next()
})


const booksArr = [{name:"book",year:1990},{name:"other book",year:2006}]



app.get("/people/:index",function(request,response){
    const indexPerson = request.params.index
    axios.get(ELE_PEOPLE_URL+"people").then((result)=>{
        response.send(result.data[indexPerson])
    })
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