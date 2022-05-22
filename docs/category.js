document.addEventListener("DOMContentLoaded", animal)

function animal(){





     let url ="https://api.giphy.com/v1/gifs/search?api_key=Cig5d5Q9Tt7dWXsfN7ETHrST7hliU4LR&q=animal&limit=25&offset=0&rating=g&lang=en";



fetch(url)
.then(response => response.json())
.then(content => {
   console.log(content.data);
   console.log("META", content.meta);

   let arr = content.data;

   arr.forEach(function(e){ 


let anc = document.createElement("a");
anc.href = e.images.downsized.url;


let iimg = document.createElement("img");
iimg.classList.add("clss");

iimg.src = e.images.downsized.url;

anc.appendChild(iimg);



       let con = document.querySelector(".category");


   con.appendChild(iimg)

    


 

   })

}) 

       }