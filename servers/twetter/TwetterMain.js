const tweeter = postsMange()
const renderer = Renderer()

const input = $("#input")


const mrnder = function(){
    renderer.renderPosts(tweeter.getPosts())
}
const post = function () {
    const postVal = input.val()
    input.val("")
    if(!postVal){
        alert("Plaese Enter a post!!")
    }else{
    tweeter.addPost(postVal)
    renderer.renderPosts(tweeter.getPosts())
    
    }
}

$("#posts").on("click", "button", function () {

    const buttonId = $(this).attr('id')
    const dataDeletBtn = $(this).data("btn")

    if (dataDeletBtn === "delete") {
        tweeter.removePost(buttonId)
        mrnder()
        return
    } else {
        const buttonIdVal = $("#t" + buttonId).val()
        if(!buttonIdVal){
            alert("Plaese Enter a comment!!")
        }else{
        tweeter.addComment(buttonIdVal, buttonId)
        mrnder()
        }
    }
})

$("#posts").on("click", "span", function () {
    const commentID = $(this).parent().attr('id')
    const postID = $(this).closest(".post").attr("id")
    tweeter.removeComment(postID , commentID)
    mrnder()

})

mrnder()

