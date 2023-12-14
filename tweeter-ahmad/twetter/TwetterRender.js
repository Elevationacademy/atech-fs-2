
const Renderer = function(){
   const postsSource = $("#posts-template").html()
   const postsTemplate = Handlebars.compile(postsSource)


   const postSource = $("#post-template").html()
   const postTemplate = Handlebars.compile(postSource)

   const commentSource = $("#comments-template").html()
   const commentTemplate = Handlebars.compile(commentSource)


   const renderPostsHB = function(posts){
      $("#posts").empty()
      $("#input").text =""
      $("#posts").addClass("posts")
      const newHTML = postsTemplate({posts:posts})
      $("#posts").append(newHTML)
   }

   const renderPostsHB2 = function(posts){
      $("#posts").empty()
      $("#input").text =""
      $("#posts").addClass("posts")
      for (let p of posts) {
         renderPostHB(p)
      }
   }


   const renderPostHB = function(post){
      const newHTML = postTemplate(post)
      $("#posts").append(newHTML)
      for( let c of post.comments){
         renderCommentHB(c,post.id)
      }
   }

   const renderCommentHB = function(comment,postID){
      const newCommentHTML = commentTemplate(comment)

      $('#'+postID).find(".commentPosts").append(newCommentHTML)
   }

   const renderPosts = function (posts) {
      $("#posts").empty()
      $("#input").text =""
      $("#posts").addClass("posts")
      
      for (let p in posts) {
   
         const newElemntPost = "<div  class= post id=" + posts[p].id + ">" + posts[p].text + "</div>"
         $("#posts").append(newElemntPost)
   
         for (let pc in posts[p].comments) {
            const deletX = "<span class=delete-comment data-span= " + posts[p].id + " >x</span>"
            const newElemntComment = "<div class= ></div><div class = comments id=" + posts[p].comments[pc].id + ">" + deletX + " " + posts[p].comments[pc].text + "</div>"
            $("#" + posts[p].id).append(newElemntComment)
         }
   
         const newtext = "<input id =t" + posts[p].id + " type=text placeholder= comment? >"
         const newbtn = "<button class = commentbtn id =" + posts[p].id + ">comment</button>"
   
         $("#" + posts[p].id).append("<div></div>")
         $("#" + posts[p].id).append(newtext)
         $("#" + posts[p].id).append(newbtn)
         const delBtn = "<br><br><button class= delete id = d" + posts[p].id + " data-btn=delete> Delete Post </button>"
         $("#" + posts[p].id).append(delBtn)
   
      }
   }
   return {renderPosts : renderPostsHB2}
}
