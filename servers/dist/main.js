$("#submit").on("click",function(){
    const animalName = $("#name").val()
    $.get(`/animals/${animalName}`).then((animal)=>{
        if(animal.type){
            $("#animals").append(`<li>${animal.name}  ${animal.age} ${animal.type}</li>`)
        } else {
            alert(animal.message)
        }
    
    })
})


$("#add").on("click",function(){
    const animalName = $("#nameAnimal").val()
    const animalAge = $("#age").val()
    const animalType = $("#type").val()

    $.post("/animals",{type:animalType,age:animalAge,name:animalName}).then((data)=>{
        console.log(data)
    })
})