
const urlPost = "http://localhost:3000/posts";
let cardBody = document.querySelector("#cardBody");

fetch(urlPost)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(item => {
            cardBody.innerHTML += `<div id="${item.id}" class="col mb-4"><div class="card h-100">
            <img src="https://picsum.photos/200/300?random=2" class="card-img-top" alt="randomImg" style="width:100%; >
            <div class="card-body active">
            <h5 class="card-title">${item.title}</h5>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button val="${item.id}" type="button" class="btn btn-outline-primary" id="btnDelete">Delete</button>
            </div>
            </div>
            </div>`})
    })

const myModal = new bootstrap.Modal("#myModal");
cardBody.addEventListener("click", showModal)
let urlModal;

function showModal(event) {
    let id;

    if (event.target && event.target.parentElement.matches(".card")) {
        myModal.show();
        id = event.target.parentElement.parentElement.id;
        urlModal = `http://localhost:3000/posts/${id}`;
    
        fetch(urlModal)
            .then(res => res.json())
            .then(data => loadPost(data));
    }else if(event.target.matches("#btnDelete")){
        id=event.target.getAttribute("val");
            fetch(`http://localhost:3000/posts/${id}`,{
            method: 'DELETE',
        })
            .then(res => res.json()) 
            .then(res => console.log(res))
        }

};


function loadPost(data) {
    const modalTitle = document.querySelector(".modal-header");
    const modalBody = document.querySelector(".modal-body");
    modalTitle.innerHTML = `<h4 class="modal-title">${data.title}</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    modalBody.innerHTML = `<p>${data.body}</p>`;
    loadUsers(data.userId);
    showComments(data.id);
};

function loadUsers(data){
    console.log(data)
    let urlModalU = `http://localhost:3000/users/${data}`;

    fetch(urlModalU)
        .then(res=> res.json())
        .then(data => loadEmail(data))
}
function loadEmail(data){
    const modalUser = document.querySelector(".modal-user");
    modalUser.innerHTML = `<h4>Users</h4><p>${data.username}</p><p>${data.email}</p>`;
};

const btnComments = document.querySelector(".modal-comments");
btnComments.addEventListener("click", loadCommentsbtn);

function loadCommentsbtn (){
    let collapse = document.querySelector("#collapseEx");
    collapse.classList.toggle("collapse"); 
};

function showComments(data){
    const urlComments = `https://jsonplaceholder.typicode.com/posts/${data}/comments`
    const loadCom = document.querySelector(".loading-comments")
        fetch(urlComments)
            .then(res => res.json())
            .then(data => {
                loadCom.innerHTML= "";
                data.forEach(com => {
                    loadCom.innerHTML += `<p class="fw-bold">${com.name}</p><p>${com.email}</p><p>${com.body}</p>`} 
            )}                   
)}; 