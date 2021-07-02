function myFunction(){

let dots = document.getElementById("dots") ;
let para = document.getElementById("more-text");
let readMoreBtn = document.getElementById("read-more-btn");


if(dots.style.display == "none"){


    dots.style.display = "inline" ;
    readMoreBtn.innerHTML = "Read more";
    para.style.display = "none" ;

}
else{

    dots.style.display = "none";
    readMoreBtn.innerHTML = "Read Less";
    para.style.display = "inline";




}




}