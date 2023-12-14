
const postsMange = function(){
    

    
    let postIdCounter = posts.length+1
    let commentIdCounter = 7
   
    const  getPosts   = function(text){
        return posts
    }
   
    const   addPost  = function(text){
        const newPost = {
            id :"p"+ postIdCounter,
            text :text ,
            comments :[]
        }
        posts.push(newPost)
        postIdCounter++
        
    }
   
    const  removePost   = function(postID){
        for (let i in posts){
            if(posts[i].id===postID){
                posts.splice(i,1)
            }
        }
    }

    const addComment =function(text,postID){
        const newCommment = {  id:"c"+commentIdCounter, text:text }
        
        for (let i in posts){
            if(posts[i].id===postID){
                posts[i].comments.push(newCommment)
                
            }
        }
        commentIdCounter++     
    }
   
    const removeComment  =function(postId,commentid){
        for (let i in posts){
            if(posts[i].id === postId){
                for(let j in posts[i].comments){
                    if(posts[i].comments[j].id === commentid){
                        posts[i].comments.splice(j,1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        removeComment ,
        addComment
    }
}


