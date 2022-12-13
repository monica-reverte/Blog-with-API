//const post = document.querySelector(".card");
//post.addEventListener("click", firstModal);



const urlPost = "http://localhost:3000/posts";
let cardBody = document.querySelector("#cardBody");

fetch(urlPost)
        .then((response) => response.json())
        .then((posts) => {
            const tpl = posts.map((post)=>`<div class="row row-cols-1 row-cols-md-3 g-4"><div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                </div>
            </div>
        </div>
        `);
        cardBody.innerHTML = `<div class="col">${tpl}</div>`

        });       
        
        
//fetch(urlPost)
       // .then(response => response.json())
        //.then(posts => {
            //for(let i = 0; i<data.lengtH; i++){
              //  cardBody.innerHTML += `<div class="col"><div class="card h-100">
               // <img src="..." class="card-img-top" alt="...">
                //<div class="card-body">
                   // <h5 class="card-title">${posts.title}</h5>
               // </div>
            //</div>
        //`}
            
        //})

//

// const urlUsers = "http://localhost:3000/users";





