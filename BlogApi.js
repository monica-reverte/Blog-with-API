
const urlPost = "http://localhost:3000/posts";
let cardBody = document.querySelector("#cardBody");

fetch(urlPost)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(item =>{
        cardBody.innerHTML += `<div class="col mb-4"><div class="card h-100">
            <img src="https://picsum.photos/200/300?random=2" class="card-img-top" alt="randomImg" style="width:100%; >
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            </div>
            </div>
        `})
            
    })

    













