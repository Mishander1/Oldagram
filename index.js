const likePost1 = document.getElementById("like-post-1")
const likePost2 = document.getElementById("like-post-2")
const likePost3 = document.getElementById("like-post-3")
numLikes1 = document.getElementById("likes1")
numLikes2 = document.getElementById("likes2")
numLikes3 = document.getElementById("likes3")
let likes1 = 0
let likes2 = 0 
let likes3 = 0  
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
likePost1.addEventListener("click", function() {
    likes1 += 1
    if (likes1 === 1) {
        numLikes1.textContent = likes1 + " like"
    }else{
    numLikes1.textContent = likes1 + " likes"}
})

likePost2.addEventListener("click", function() {
    likes2 += 1
    if (likes2 === 1) {
        numLikes2.textContent = likes2 + " like"
    }else{
    numLikes2.textContent = likes2 + " likes"}
})

likePost3.addEventListener("click", function() {
    likes3 += 1
    if (likes3 === 1) {
        numLikes3.textContent = likes3 + " like"
    }else{
    numLikes3.textContent = likes3 + " likes"}
    console.log(likes3)
})