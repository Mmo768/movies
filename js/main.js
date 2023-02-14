// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

let navbar = Array.from(document.querySelectorAll("nav .nav-link"));
let films = document.querySelector(".container .row");
let searchInput = document.querySelector(".search input");
let detailBtn;
let modal = document.querySelector(".modal");
let closeBtn1 = document.querySelector(".modal .btn-close");
let closeBtn2 = document.querySelector(".modal .button");


let container=[];
let containerSearch=[];


// ========== call data =========
async function callData(url , index){
    let data = await fetch(url);
    let res = await data.json();
    if(index == 0){
        container = res.results;
    }else if(index == 1){
        containerSearch = res.results;
    }
}

// ========== display data =========
function display(index){
    let result ="";
    for(i=0 ; i<index.length ; i++){
        result += `<div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="${`https://image.tmdb.org/t/p/w500/${index[i].poster_path || index[0].poster_path}`}" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column align-items-start">
            <h5 class="card-title flex-grow-1">${index[i].name || index[i].title}</h5>
            <a count="${i}" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>`
    }
    films.innerHTML = result;
}


// ========== modal detail =========
function detail(index){
    detailBtn = Array.from(document.querySelectorAll(".container .row a"));
    for(i=0 ; i<index.length ; i++){
        detailBtn[i].addEventListener('click',function(e){
            modal.classList.replace("d-none" , "d-block");
            document.querySelector(".modal img").setAttribute("src",`https://image.tmdb.org/t/p/w500${index[e.target.getAttribute("count")].poster_path}`);
            document.querySelector(".modal h5").innerHTML = index[e.target.getAttribute("count")].name || index[e.target.getAttribute("count")].title;
            document.querySelector(".modal p").innerHTML = index[e.target.getAttribute("count")].overview;
        });
    };
};

// ========== close modal =========
function closeModal(){
    modal.classList.replace("d-block","d-none");
};
closeBtn1.addEventListener('click',closeModal);
closeBtn2.addEventListener('click',closeModal);


// ========== start navbar =========

for(i =0; i<navbar.length ; i++){
    navbar[i].addEventListener('click',function(e){
        if(e.target.text === "Home"){
            document.querySelector(".search").classList.replace("d-block","d-none");
            home();
        }else if(e.target.text === "Search"){
            search();
            searchData();
        }
    });
};


// ========== start search =========
function search(){
    document.querySelector(".search").classList.replace("d-none","d-block");
}
async function sea(index){
    await callData(`https://api.themoviedb.org/3/search/movie?api_key=20765ae7b31345b32c5d2679fb836627&query=${index}` , 1 );
    console.log(containerSearch);
    display(containerSearch);
    detail(containerSearch);

}

function searchData(){
    searchInput.addEventListener('input',function(e){
        sea(e.target.value);
    });
}


// ========== home =========
async function home(){
    await callData("https://api.themoviedb.org/3/trending/all/day?api_key=20765ae7b31345b32c5d2679fb836627" , 0);
    display(container);
    detail(container);

};

home();





