//const post = document.querySelector(".card");
//post.addEventListener("click", firstModal);



const urlPost = "http://localhost:3000/posts";
let cardBody = document.querySelector("#cardBody");
       
fetch(urlPost)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(item =>{
        cardBody.innerHTML += `<div class="col"><div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            </div>
            </div>
        `})
            
    })






