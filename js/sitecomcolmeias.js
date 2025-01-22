var btn = document.getElementsByClassName("btn");
var gallery = document.getElementById("gallery");

var images = new Array(
    "imagensColmeias/colmeia4.jpg",
    "imagensColmeias/colmeia8.jpg",
    "imagensColmeias/colmeia9.jpg",
    "imagensColmeias/colmeia10.jpg"  

);

for(let i= 0; i<btn.length; i++){
    btn[i].onclick = function(){
        gallery.src = images[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");  

        this.className += " active";
    };

   
}

