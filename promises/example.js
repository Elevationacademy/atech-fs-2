const getFirstPet = (pets) => {
    return pets[0]
}

const petsPromise = callPetsAPI()

petsPromise.then((pets)=>{
    console.log(getFirstPet(pets))
})

petsPromise.then((pets)=>{
    console.log(pets)
})

