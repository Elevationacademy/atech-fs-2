const people = {people: [{firstName:"Mohammed",lastName:"Naarani"},{firstName:"Muaz",
    lastName:"Abdeen"},{firstName:"Emran",lastName:"Qadan"}]}

const sourceHTML = $("#card-template").html()
console.log(sourceHTML)
let template = Handlebars.compile(sourceHTML);
console.log(template(people))

$("body").append(template(people))
