const numbObj = {
    name: "Numbers",
    arr : [{name:"one",number:1},{name:"two",number:2}]
}

const namesObj = {
    name : "Names",
    arr : ["Elias","Baraa","Fadi","Ameer","Ayman"]
}

//take the blueprint of the template (qalb)
const source = $("#list-template").html()
// create the template (qalb)
const template = Handlebars.compile(source)
// pass the data to the template and create new html (pour the data to the qalb)
const newHTML = template(numbObj)
// add the new data from the qalb to the html
$("body").append(newHTML)
