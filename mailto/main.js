recipe = {name:"Summer pudding",link:"https://video.cat",summery:"Fake summary"}


//take the blueprint of the template (qalb)
const source = $("#recipe-template").html()
// create the template (qalb)
const template = Handlebars.compile(source)
// pass the data to the template and create new html (pour the data to the qalb)
const newHTML = template(recipe)
// add the new data from the qalb to the html
$("#recipes").append(newHTML)