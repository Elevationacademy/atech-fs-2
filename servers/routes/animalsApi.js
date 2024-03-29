const express = require("express")

const router = express.Router()

const animalsArr = [
    {type: "cat",name:"mshmsh",age:1},
    {type: "dog",name:"bob",age:6},
    {type: "cat",name:"lazy",age:1},
    {type: "parrot",name:"nula",age:2}
]


router.get("/",function(request,response){
    response.send({animalsArr})
})

router.get("/elias",function(request,response){
    response.send("Hello!")
})
//get animal by name
router.get("/:name",function(request,response){
    const animalName = request.params.name
    const foundAnimal = animalsArr.find((animal)=>animal.name == animalName)
    if(foundAnimal){
        response.send(foundAnimal)
    } else {
        response.send({message: "Not found!"})
    }
})

router.post("/",function(request,response){
    const newAnimal = request.body
    animalsArr.push(newAnimal)
    response.send(newAnimal)
})


router.delete("/:name",function(request,response){
    const animalName = request.params.name
    const indexAnimal = animalsArr.findIndex((animal)=> animal.name === animalName)
    const deletedAnimal = animalsArr.splice(indexAnimal,1)
    response.send(deletedAnimal)
})


router.get("/elias/:pet",function(request,response){
    if(request.params.pet == "bob"){
        response.send("woof woof")
    }
    if(request.params.pet == "mshmsh"){
        response.send("meow")
    } else{
        response.send("no animal found")
    }
})


router.get("/greeter",function(req,res){
    let greet = "Hello "
    // const gender = req.query.gender
    // if(gender == "female"){
    //     greet+="Mrs"
    // } else if (gender == "male") {
    //     greet +="Mr"
    // }
    res.send(greet)
})

router.get("/greeter/:gender",function(req,res){
    let greet = "Hello "
    const gender = req.body
    if(gender == "female"){
        greet+="Mrs"
    } else if (gender == "male") {
        greet +="Mr"
    }
    res.send(greet)
})

router.get("/person",function(req,res){
    const name = req.query.name
})

router.get("/person/:name",function(req,res){
    const age = req.query.age
    const name = req.params.name
})
module.exports = router