let av = document.querrySelector(".img");

av.addEventListener("click", function(e){
  
 let giff = window.location.href;

  let replaced = giff.split('\/').pop();
  
  let gi = giff.replace(replaced, ' ');
  
  
  let g = gi.pop();
  
  
  let hh = gi.replace(g," ");
  
  window.location.href = hh;

})
