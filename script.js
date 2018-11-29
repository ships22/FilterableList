(function(){
    let filterInput = document.getElementById('filterInput');

    var filterNames = function(){
       let filterValue = filterInput.value.toUpperCase();
       
        //Get names ul
        //let ul = document.getElementById('names');
       //Get lis from ul
       let li = document.querySelectorAll('li.collection-item');

       //Loop through lis
       for(let i = 0; i < li.length; i++){
           let a = li[i].getElementsByTagName('a')[0];

           //If matches
           if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
               li[i].style.display = '';
           } else {
               li[i].style.display = 'none';
           }
       }
   };

   var start = function(){
       
       filterInput.addEventListener('keyup', filterNames);
   };
   window.addEventListener("DOMContentLoaded", start);
}());
    

        
        