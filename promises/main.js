const callPetsAPI = () => {
    const petsPromise = $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets")
    petsPromise.then(()=>{
        console.log("in function call Pets")
    })
    return petsPromise
}



